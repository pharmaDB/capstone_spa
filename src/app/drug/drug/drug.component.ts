import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {v4 as uuidv4} from 'uuid';
import {DiffMatchPatch} from 'diff-match-patch-ts';
import * as _ from 'lodash';

import {DrugService} from '../../shared/services/drug.service';
import {DrugViewConfig, DrugViewMode} from '../drug-view-config.interface';

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
