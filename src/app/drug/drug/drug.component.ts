import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {v4 as uuidv4} from 'uuid';
import * as _ from 'lodash';
import {
  DrugService,
  IPharmaDBDrugLabel,
  IPharmaDBDrugLabelSection,
  IPharmaDBDrugPatent,
  IPharmaDBGetByNDAResponse
} from '../../shared/services/drug.service';
import {DrugViewConfig, DrugViewMode} from '../drug-view-config.interface';

const randomColor = require('randomcolor');
const color = require('color');


/**
 * DrugComponent
 * The DrugComponent is the main component for the Drug view and coordinates data sharing and event handling across all its children
 * components (DrugTimeline, DrugText and DrugHeader). Events from child components are observed and responded to and data is propagated
 * down into the child components accordingly. Overall state of the Drug view is managed using params in the drugViewConfig object.
 */
@Component({
  selector: 'app-drug',
  templateUrl: './drug.component.html',
  styleUrls: ['./drug.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class DrugComponent implements OnInit {
  isPageLoading = true;
  isTextLoading = false;
  setIdFromURL: string | undefined = undefined;
  ndaNumber: string; // NDA number of Drug currently in-view
  timelineItems: (TimelineLabel | TimelinePatent)[] = []; // data structure to store all the items in view
  drug: IPharmaDBGetByNDAResponse; // Raw data (from the API/DrugService) of the Drug currently in-view

  // default empty drugViewConfig
  drugViewConfig: DrugViewConfig = {
    drugViewMode: DrugViewMode.none,
    drugLabelSetIDs: [],
    selectedDrugLabelSetID: '',
    inViewLabelOne: undefined,
    inViewLabelTwo: undefined,
    labelDiff: undefined,
    isPatentInView: false,
    inViewPatent: undefined
  };

  allAdditionsAcrossAllLabels = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private drugService: DrugService,
  ) {

    this.router.routeReuseStrategy.shouldReuseRoute = () => {
      return false;
    };

  }

  onSetIdClicked(setId: string): void {
    this.router.navigate([`/drugs/${this.ndaNumber}/${setId}`]);
  }

  /**
   * onDiffAdditionsClicked
   * @param diffAddition a valid diff addition item
   * onDiffAdditionsClicked should be fired once the user clicks on an addition that has potentially related patents associated with it.
   * It will change the DrugViewConfig accordingly and will also compile the appropriate object that contains the relevant patent claim,
   * scores, and parent claims
   */
  onDiffAdditionClicked(diffAddition: any): void {
    const patents: IPharmaDBDrugPatent[] = [];

    // for each score (which might be associated to a unique patent claim)
    diffAddition[3].scores.forEach((score: any): void => {

      // get the patent from the this.drug object that contains all the drug labels patents
      const patentFromDrugObject = _.find(this.drug.drugPatents, (patent: IPharmaDBDrugPatent) => {
        return patent.patent_number === score.patent_number;
      });
      console.log(patentFromDrugObject);

      // if not patent exists, log a notice in the console and emit a drug view change that doesnt cause a patent window reveal
      if (!patentFromDrugObject) {
        console.log('there are no patents associated with this addition');
        this.onDrugViewChange({
          drugViewMode: this.drugViewConfig.drugViewMode,
          drugLabelSetIDs: this.drugViewConfig.drugLabelSetIDs,
          selectedDrugLabelSetID: this.drugViewConfig.selectedDrugLabelSetID,
          inViewLabelOne: this.drugViewConfig.inViewLabelOne,
          inViewLabelTwo: this.drugViewConfig.inViewLabelTwo,
          isPatentInView: false,
          inViewPatent: undefined
        });
        return;
      }

      const patentClaim = _.find(patentFromDrugObject.claims, (claim: any) => {
        return parseInt(claim.claim_number, 10) === score.claim_number;
      });

      score.claim = patentClaim;
      score.parentClaims = [];

      score.parent_claim_numbers.forEach((parentClaimNumber: number) => {
        const parentClaim = _.find(patentFromDrugObject.claims, (claim: any) => {
          return parseInt(claim.claim_number, 10) === parentClaimNumber;
        });
        score.parentClaims.push(parentClaim);
      });

      // reverse the order so that the claims show in order from highest score to lowest
      _.reverse(score.parentClaims);
    });

    // emit a DrugViewChange that way the template/view will now show the patent window/panel and the patent info
    this.onDrugViewChange({
      drugViewMode: this.drugViewConfig.drugViewMode,
      drugLabelSetIDs: this.drugViewConfig.drugLabelSetIDs,
      selectedDrugLabelSetID: this.drugViewConfig.selectedDrugLabelSetID,
      inViewLabelOne: this.drugViewConfig.inViewLabelOne,
      inViewLabelTwo: this.drugViewConfig.inViewLabelTwo,
      isPatentInView: true,
      inViewPatent: { diffElement: diffAddition, patents}
    });
  }

  /**
   * onClasePatentViewClicked handler
   * handles events from the DrugText component once the close button is clicked on the patent viewing window. Resets the patent and patent
   * claim currently in-view and triggers a drugViewConfig change accordingly.
   */
  onClosePatentViewClicked(): void {
    this.onDrugViewChange({
      drugViewMode: this.drugViewConfig.drugViewMode,
      drugLabelSetIDs: this.drugViewConfig.drugLabelSetIDs,
      selectedDrugLabelSetID: this.drugViewConfig.selectedDrugLabelSetID,
      inViewLabelOne: this.drugViewConfig.inViewLabelOne,
      inViewLabelTwo: this.drugViewConfig.inViewLabelTwo,
      isPatentInView: false,
      inViewPatentNumber: undefined,
      inViewPatent: undefined});
  }

  /**
   * onDrugViewChange handler
   * This handler is meant to be fired whenever a change is made that constitutes a change to the DrugViewConfig whether from this
   * component or from a child component. It sets the new drugViewConfig and changes the view and data provided to DrugComponents children
   * accordingly, this is also where the diff is executed.
   * @param drugViewConfig: an object describing the new view to the rendered for the Drug view
   */
  onDrugViewChange(drugViewConfig: DrugViewConfig): void {

    // set new drugViewConfig
    this.drugViewConfig = drugViewConfig;

    // if the drugView is in historicalLabelDiff mode...
    if ((this.drugViewConfig.drugViewMode === DrugViewMode.historicalLabelDiff) && (this.drugViewConfig.inViewLabelOne)) {
      const shadowDoc: { textSnippet: string, diffData?: any}[] = [];

      // get all the relevant drug labels (by the selected Set ID and sorted oldest first)
      const relevantDrugLabels = _.sortBy(_.filter(this.drug.drugLabels, (label: IPharmaDBDrugLabel) => {
        return label.set_id === this.drugViewConfig.selectedDrugLabelSetID;
      }), ['published_date']);

      // compile all the sections ever existing through all the labels history
      const allSectionsFromAllLabels: string[] = [];
      _.forEach(relevantDrugLabels, (label: IPharmaDBDrugLabel) => {
        _.forEach(label.sections, (section: IPharmaDBDrugLabelSection) => {
          // tslint:disable-next-line:no-unused-expression
          !allSectionsFromAllLabels.includes(section.name) ? allSectionsFromAllLabels.push(section.name) : null;
        });
      });

      const labelSectionDiffs: { name: string, scores?: any[], endText: any, diff?: any, flattenedDiffs?: any}[] = [];

      // ...then iterate through each section of the label
      this.drugViewConfig.inViewLabelOne.drugLabel.sections.forEach((section: IPharmaDBDrugLabelSection) => {
        let flattenedAdditionsForSection = _.find(this.allAdditionsAcrossAllLabels, (additions: any) => {
          return additions.subsectionName === section.name;
        });
        if (!flattenedAdditionsForSection) { flattenedAdditionsForSection = []; }

        // create a diff lib style text object that can be iterated over in the template
        const fullSectionTextAsArray = [{ text: section.text, assocaitedAddition: null }];

        // for every addition over the lifetime of the section in scope...
        flattenedAdditionsForSection.additions.forEach((addition: any) => {
          // try to find the index of the added text in the fullSectionTextAsArray...
          const additionLocation = _.findIndex(fullSectionTextAsArray, (fullSectionTextAsArrayPart: any) => {
            return fullSectionTextAsArrayPart.text.indexOf(addition.addedText) !== -1;
          });

          // if the addition is not found, then exit out
          if (additionLocation === -1) { return; }

          const startingPosition = fullSectionTextAsArray[additionLocation].text.indexOf(addition.addedText);
          const endingPosition = startingPosition + addition.addedText.length;

          const textBeforeTheAddition = fullSectionTextAsArray[additionLocation].text.substring(0, startingPosition);
          const addedText = addition.addedText;
          const textAfterTheAddition = fullSectionTextAsArray[additionLocation].text.substring(endingPosition, section.text.length);
          const diffArraySegment = [
            { text: textBeforeTheAddition, assocaitedAddition: null },
            { text: addedText, assocaitedAddition: addition },
            { text: textAfterTheAddition, assocaitedAddition: null }
          ];
          fullSectionTextAsArray.splice(additionLocation, 1, diffArraySegment[0], diffArraySegment[1], diffArraySegment[2]);
        });

        labelSectionDiffs.push({
          name: section.name,
          endText: fullSectionTextAsArray
        });
      });
      this.drugViewConfig.labelDiff = labelSectionDiffs;
    }
  }

  /**
   * calculateAndFlattenAllDiffs
   * this function iterates through all of the diffs over the history of the label and will flatten all the additions into one
   * collection that way they can be more easily compared in the historical diffing/additions feature. It also stores them in
   * this.allAdditionsAcrossAllLabels
   */
  calculateAndFlattenAllDiffs(): void {
    const additionsFlattenedBySection: { subsectionName: string, additions: any[] }[] = [];

    this.timelineItems.forEach((timelineItem: TimelineItem) => {
      if (timelineItem.group !== 'label') { return; }

      (timelineItem as TimelineLabel).drugLabel.diff_against_previous_label.forEach((labelSubsection: any) => {
        let section = _.find(additionsFlattenedBySection, (flattenAdditionsSection: any) => {
          return labelSubsection.name === flattenAdditionsSection.subsectionName;
        });

        if (!section) {
          section = { subsectionName: labelSubsection.name, additions: []};
          additionsFlattenedBySection.push(section);
        }

        labelSubsection.text.forEach((diffElement: any) => {
          if ((diffElement[0] === 1) && diffElement[3]) {
            // tslint:disable-next-line:no-non-null-assertion
            section!.additions.push({
              addedText: diffElement[1],
              diffElement,
              timelineItem
            });
          }
        });
      });
    });

    // @ts-ignore
    this.allAdditionsAcrossAllLabels = additionsFlattenedBySection;
  }

  /**
   * On initialization of the DrugComponent, fetch the Drug data from the API and add each timeline and patent found
   * to the timelineItems array to be provided to the DrugTimeline component for rendering
   */
  ngOnInit(): void {
    // get NDA number from current URL route
    this.ndaNumber = this.route.snapshot.params.NDANumber;
    this.setIdFromURL = this.route.snapshot.params.setId;

    this.drugService.getDrugByApplicationNumber(this.ndaNumber).subscribe((drugData: IPharmaDBGetByNDAResponse) => {

      // store raw drug data for convenience in case needed for later features
      this.drug = drugData;

      // first iterate through the labels to determine how many setIDs there are. store them and select the first one
      this.drug.drugLabels.forEach((label: IPharmaDBDrugLabel) => {
        if (!this.drugViewConfig.drugLabelSetIDs.includes(label.set_id)) {
          this.drugViewConfig.drugLabelSetIDs.push(label.set_id);
        }
      });

      // tslint:disable-next-line:max-line-length
      // if there is a setId provided in the URL and its one of the ones included in the drug data then select that otherwise select the first set id
      if (this.setIdFromURL && this.drugViewConfig.drugLabelSetIDs.includes(this.setIdFromURL)) {
        this.drugViewConfig.selectedDrugLabelSetID = this.setIdFromURL;
      } else {
        // find the setId with the most labels, and set that as the currently in view setId if no other is present in the URL
        const setIdWithMostLabels = this.drugViewConfig.drugLabelSetIDs.map((setID: string) => {
          return { setID , count: (_.filter(this.drug.drugLabels, (label: IPharmaDBDrugLabel) => {
            return label.set_id === setID;
          })).length};
        }).reduce((a, b) => a.count > b.count ? a : b).setID;
        this.drugViewConfig.selectedDrugLabelSetID = setIdWithMostLabels;
      }

      // for every drug label present, add a label timeline item to the timelineItems arr
      this.drug.drugLabels.forEach((label: IPharmaDBDrugLabel) => {
        if (label.set_id === this.drugViewConfig.selectedDrugLabelSetID) {
          const timelineLabelColor = color(randomColor({ luminosity: 'light', hue: 'random '}));
          const timelineLabelColorDarkened = timelineLabelColor.darken(0.666);

          const timelineLabel: TimelineLabel = {
            id: uuidv4(),
            content: 'L',
            start: label.published_date,
            group: 'label',
            className: 'timeline-label-identifier',
            style: `color: ${timelineLabelColorDarkened}; border-color: ${timelineLabelColorDarkened}; background: ${timelineLabelColor}`,
            title: label.application_numbers[0],
            color: timelineLabelColor,
            colorDarkened: timelineLabelColorDarkened,
            drugLabel: label,
          };
          this.timelineItems.push(timelineLabel);
        }
      });

      // flatten out all of the additions across the history of the label, into on data structure
      this.calculateAndFlattenAllDiffs();

      this.isPageLoading = false;
    });
  }

}

/**
 * Interface for objects used in the visJS timeline library. Fits the visJS timeline item construct but includes
 * extra params specific to this web applications use case.
 */
interface TimelineItem {
  id: string;
  content: string;
  start: string;
  group: string;
  className: string;
  style: string;
  title: string;
  color: any;
  colorDarkened: any;
}

export interface TimelinePatent extends TimelineItem{
  drugLabel: IPharmaDBDrugPatent;
}

export interface TimelineLabel extends TimelineItem{
  drugLabel: IPharmaDBDrugLabel;
}
