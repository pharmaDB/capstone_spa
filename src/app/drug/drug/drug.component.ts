import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {v4 as uuidv4} from 'uuid';
import {DiffMatchPatch} from 'diff-match-patch-ts';
import * as _ from 'lodash';

import {DrugService} from '../../shared/services/drug.service';
import {DrugViewMode} from '../drug-view-mode.enum';
import {DrugViewConfig} from '../drug-view-config.interface';

@Component({
  selector: 'app-drug',
  templateUrl: './drug.component.html',
  styleUrls: ['./drug.component.scss']
})
export class DrugComponent implements OnInit {
  drugViewConfig: DrugViewConfig = {
    drugViewMode: DrugViewMode.none,
    inViewLabelOne: undefined,
    inViewLabelTwo: undefined,
    labelDiff: undefined,
    isPatentInView: false,
    inViewPatent: undefined
  };
  timelineItems: TimelineItem[] = [];
  isPageLoading = true;
  isTextLoading = false;
  ndaNumber: string;
  drug: any;

  constructor(
    private route: ActivatedRoute,
    private drugService: DrugService,
  ) { }

  onPatentClaimTagClicked(event: any): void {
    const patent = _.find(this.drug.drugPatents, (p: any) => p.patent_number === event.patent_number);
    const claim = _.find(patent.claims, (c: any) => c.claim_number === event.claim_number);

    this.onDrugViewChange({
      drugViewMode: this.drugViewConfig.drugViewMode,
      inViewLabelOne: this.drugViewConfig.inViewLabelOne,
      inViewLabelTwo: this.drugViewConfig.inViewLabelTwo,
      isPatentInView: true,
      inViewPatentNumber: patent.patent_number,
      inViewPatent: claim});
  }

  onClosePatentViewClicked(): void {
    this.onDrugViewChange({
      drugViewMode: this.drugViewConfig.drugViewMode,
      inViewLabelOne: this.drugViewConfig.inViewLabelOne,
      inViewLabelTwo: this.drugViewConfig.inViewLabelTwo,
      isPatentInView: false,
      inViewPatentNumber: undefined,
      inViewPatent: undefined});
  }

  onDrugViewChange(drugViewConfig: DrugViewConfig): void {
    this.drugViewConfig = drugViewConfig;
    if (drugViewConfig.inViewLabelOne && drugViewConfig.inViewLabelTwo) {
      const labelSectionDiffs: { name: string, scores?: any[], diff: any}[] = [];
      drugViewConfig.inViewLabelOne.data.sections.forEach((section: any) => {
        const labelTwoSection = _.find(drugViewConfig.inViewLabelTwo.data.sections, (labelTwoSec: any) => {
          return labelTwoSec.name === section.name;
        });

        const diffTool = new DiffMatchPatch();
        const diff = diffTool.diff_main(section.text, labelTwoSection.text);
        diffTool.diff_cleanupSemantic(diff);
        console.log('labelTwoSection');
        console.log(labelTwoSection);
        labelSectionDiffs.push({ name: section.name, scores: labelTwoSection.scores, diff });
      });

      this.drugViewConfig.labelDiff = {
        sections: labelSectionDiffs
      };
    }
  }

  ngOnInit(): void {
    this.ndaNumber = this.route.snapshot.params.NDANumber;

    this.drugService.getDrugByApplicationNumber(this.ndaNumber).subscribe((response) => {
      // this.isPageLoading = false;
      this.drug = response;

      this.drug.drugLabels.forEach((label: any) => {
        const timelineLabel = {
          id: uuidv4(),
          content: 'L',
          start: label.published_date,
          group: 'label',
          className: 'timeline-label-identifier',
          title: label.application_numbers[0],
          data: label
        };
        this.timelineItems.push(timelineLabel);
      });

      this.drug.drugPatents.forEach((patent: any) => {
        const timelinePatent = {
          id: uuidv4(),
          content: 'P',
          start: patent.published_date,
          group: 'patent',
          className: 'timeline-patent-identifier',
          title: patent.patent_number,
          data: patent
        };
        this.timelineItems.push(timelinePatent);
      });

      //this.drugService.processDrugLabelDiffs(this.drug.drugLabels);
      this.isPageLoading = false;
    });
  }

}



export interface TimelineItem {
  id: string;
  content: string;
  start: string;
  group: string;
  className: string;
  title: string;
  // data: any;
}

//
// THIS IS THE OLD TIMELINE MOCK DATA, DELTE AFTER WERE SURE ITS NO LONGER NEEDED FOR DEVELOPMENT
// timelineItems = [
//   {id: '1', content: 'P', start: '2007-04-20', group: 'patent', className: 'timeline-patent-identifier', title: 'tooltip', data: 'patent one. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'},
//   {id: '2', content: 'P', start: '2010-04-14', group: 'patent', className: 'timeline-patent-identifier', title: 'tooltip', data: 'patent two. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'},
//   {id: '3', content: 'L', start: '2013-04-18', group: 'label', className: 'timeline-label-identifier', title: 'tooltip', data: 'Label one. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'},
//   {id: '4', content: 'L', start: '2015-04-16', group: 'label', className: 'timeline-label-identifier', title: 'tooltip', data: 'Label two. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).'},
//   {id: '5', content: 'L', start: '2016-04-25', group: 'label', className: 'timeline-label-identifier', title: 'tooltip', data: 'Label three. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.'},
//   {id: '6', content: 'P', start: '2020-04-27', group: 'patent', className: 'timeline-patent-identifier', title: 'tooltip', data: 'Patent three. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.'}
// ];
