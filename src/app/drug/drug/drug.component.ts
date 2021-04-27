import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {v4 as uuidv4} from 'uuid';
import {DiffMatchPatch} from 'diff-match-patch-ts';
import * as _ from 'lodash';

const randomColor = require('randomcolor');
const color = require('color');

import {DrugService, IPharmaDBDrugLabel, IPharmaDBDrugPatent, IPharmaDBGetByNDAResponse} from '../../shared/services/drug.service';
import {DrugViewConfig, DrugViewMode} from '../drug-view-config.interface';
import set = Reflect.set;

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

  /**
   * onPatentClaimTagClicked handler
   * handles events from the DrugText component once a patent claim tag is clicked by the user. Finds the appropriate patent and patent
   * claim from the drug patents and triggers a drugViewConfig change accordingly.
   * @param event: event emitted from the DrugText component, representing the user clicking on a patent claim tag
   */
  onPatentClaimTagClicked(event: any): void {
    // const patent = _.find(this.drug.drugPatents, (p: any) => p.patent_number === event.patent_number);
    // const claim = _.find(patent.claims, (c: any) => c.claim_number === event.claim_number);
    //
    // this.onDrugViewChange({
    //   drugViewMode: this.drugViewConfig.drugViewMode,
    //   inViewLabelOne: this.drugViewConfig.inViewLabelOne,
    //   inViewLabelTwo: this.drugViewConfig.inViewLabelTwo,
    //   isPatentInView: true,
    //   inViewPatentNumber: patent.patent_number,
    //   inViewPatent: claim});
  }

  onSetIdClicked(setId: string): void {
    this.router.navigate([`/drugs/${this.ndaNumber}/${setId}`]);
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
    console.log(this.drugViewConfig);
    this.timelineItems = [];
    // if two labels are selected (ie the new drugViewConfig indicates a label diff)...
    if (drugViewConfig.inViewLabelOne && drugViewConfig.inViewLabelTwo) {
      console.log('diffTime');
      // const labelSectionDiffs: { name: string, scores?: any[], endText: any, diff: any, flattenedDiffs: any}[] = [];
      //
      // // ...then iterate through each section of the label
      // drugViewConfig.inViewLabelOne.data.sections.forEach((section: any) => {
      //
      //   // grab the alternate section from the opposing label
      //   const labelTwoSection = _.find(drugViewConfig.inViewLabelTwo.data.sections, (labelTwoSec: any) => {
      //     return labelTwoSec.name === section.name;
      //   });
      //
      //   // execute a diff on the two sections and clean it up to make it human readable
      //   const diffTool = new DiffMatchPatch();
      //   const diff = diffTool.diff_main(section.text, labelTwoSection.text);
      //   diffTool.diff_cleanupSemantic(diff);
      //
      //   const flattenedDiffs = _.find(this.allAdditionsAcrossAllLabels, (x: any) => {
      //     return x.name === section.name;
      //   });
      //
      //   // create a new section object with the diff data, patent claim scores and section name. store it.
      //   labelSectionDiffs.push({
      //     name: section.name,
      //     scores: labelTwoSection.scores,
      //     endText: labelTwoSection.text,
      //     diff,
      //     flattenedDiffs });
      // });
      //
      // // store the diffs in the drugViewConfig, so they can be delivered to and presented by the DrugText component
      // this.drugViewConfig.labelDiff = {
      //   sections: labelSectionDiffs
      // };
      //
      // // dev code
      //
      // // for every drug label section...
      // this.drugViewConfig.labelDiff.sections.forEach((section: any) => {
      //   const endTextAsArray = [{ text: section.endText, fromLabel: null }];
      //
      //   // see if there is an addition that fits in that section...
      //   section.flattenedDiffs.additionsAcrossLabelLifetime.forEach((diffFromTime: any) => {
      //     const additionLocation = _.findIndex(endTextAsArray, (endTextArrayItem: any) => {
      //       return endTextArrayItem.text.indexOf(diffFromTime.addedText) !== -1;
      //     });
      //
      //     if (additionLocation === -1) {
      //       return;
      //     }
      //
      //     const startingPosition = endTextAsArray[additionLocation].text.indexOf(diffFromTime.addedText);
      //     const endingPosition = startingPosition + diffFromTime.addedText.length;
      //
      //     const textBeforeTheAddition = endTextAsArray[additionLocation].text.substring(0, startingPosition);
      //     const addedText = diffFromTime.addedText;
      //     const textAfterTheAddition = endTextAsArray[additionLocation].text.substring(endingPosition, section.endText.length);
      //     const diffArraySegment = [
      //       { text: textBeforeTheAddition, fromLabel: null },
      //       { text: addedText, fromLabel: diffFromTime },
      //       { text: textAfterTheAddition, fromLabel: null }
      //     ];
      //     endTextAsArray.splice(additionLocation, 1, diffArraySegment[0], diffArraySegment[1], diffArraySegment[2]);
      //   });
      //
      //   section.endTextAsArray = endTextAsArray;
      // });
    }
  }

  calculateAndFlattenAllDiffs(): void {
    const additionsFlattenedBySection: any[] = [];
    _.reverse(this.drug.drugLabels).forEach((label: any, index: number) => {
      if ((index + 1) > (this.drug.drugLabels.length - 1)) {
        return;
      }
      const secondLabel = this.drug.drugLabels[index + 1];
      const secondLabelTimelineItem = _.find(this.timelineItems, (timelineItem: any) => {
        return timelineItem.splId === secondLabel.spl_id;
      });

      label.sections.forEach((section: any) => {
        let sectionCollection = _.find(additionsFlattenedBySection, (s: any) => {
          return s.name === section.name;
        });

        if (!sectionCollection) {
          additionsFlattenedBySection.push({
            name: section.name,
            additionsAcrossLabelLifetime: [ ]
          });
          sectionCollection = _.find(additionsFlattenedBySection, (s: any) => {
            return s.name === section.name;
          });
        }

        const secondLabelSection = _.find(secondLabel.sections, (labelSection: any) => {
          return labelSection.name === section.name;
        });

        if (!secondLabelSection) { return; }

        // execute a diff on the two sections and clean it up to make it human readable
        const diffTool = new DiffMatchPatch();
        const diff = diffTool.diff_main(section.text, secondLabelSection.text);
        diffTool.diff_cleanupSemantic(diff);

        diff.forEach((diffElement: any) => {
          if (diffElement[0] === 1) {
            // @ts-ignore
            sectionCollection.additionsAcrossLabelLifetime.push({
              addedText: diffElement[1],
              timelineItem: secondLabelTimelineItem,
              scores: { } } );
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

      // if there is a setId provided in the URL and its one of the ones included in the drug data then select that otherwise select the first set id
      if (this.setIdFromURL && this.drugViewConfig.drugLabelSetIDs.includes(this.setIdFromURL)) {
        this.drugViewConfig.selectedDrugLabelSetID = this.setIdFromURL;
      } else {
        this.drugViewConfig.selectedDrugLabelSetID = this.drugViewConfig.drugLabelSetIDs[0];
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
            drugLabel: label
            // data: label,
            // splId: label.spl_id,
          };
          this.timelineItems.push(timelineLabel);
        }
      });

     // this.calculateAndFlattenAllDiffs();

      // for every drug patent present, add a patent timeline item to the timelineItems arr
      // this.drug.drugPatents.forEach((patent: any) => {
      //   const timelinePatent = {
      //     id: uuidv4(),
      //     content: 'P',
      //     start: patent.published_date,
      //     group: 'patent',
      //     className: 'timeline-patent-identifier',
      //     title: patent.patent_number,
      //     data: patent
      //   };
      //   this.timelineItems.push(timelinePatent);
      // });

      this.isPageLoading = false;
    });
  }

}

/**
 * Interface for objects used in the visJS timeline library. Fits the visJS timeline item construct but includes
 * extra params specific to this web applications use case.
 */
// export interface TimelineItem {
//   id: string;
//   content: string;
//   start: string;
//   group: string;
//   className: string;
//   title: string;
//   data?: any;
// }

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
