import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { DiffMatchPatch } from 'diff-match-patch-ts';
import { catchError, retry } from 'rxjs/operators';

import { DrugSearchType } from '../../search/drug-search-type.enum';
import { OpenFDADrug } from './open-fdadrug.interface';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class DrugService {

  constructor(private http: HttpClient) { }

  /**
   *
   * @param searchQuery
   * @param searchType
   */
  findDrug(searchQuery: string, searchType: string): Observable<any> {
    return this.http.get(`https://api.pharmadb.org/drugs?searchQuery=${searchQuery}&searchType=${searchType}`);
  }

  getDrugByApplicationNumber(applicationNumber: string): Observable<any> {
    const getCurrentSplLabel = false;
    const getSPLHistoryMetadata = false;
    const getImages = true;
    const getLabels = true;
    const getPatents = true;

    return this.http.get(`https://api.pharmadb.org/drugs/${applicationNumber}?splHistory=${getSPLHistoryMetadata}&images=${getImages}&currentSplLabel=${getCurrentSplLabel}&labels=${getLabels}&patents=${getPatents}`);
  }

  /**
   *
   * @param drugLabels
   */
  processDrugLabelDiffs(drugLabels: DrugLabel[]): DrugLabelDiff[] {
    const drugLabelDiffs: DrugLabelDiff[] = [];

    // sort the drug labels by date of publication
    drugLabels.sort((a: DrugLabel, b: DrugLabel) => {
      const dateA = new Date(a.published_date);
      const dateB = new Date(b.published_date);
      return dateA.getTime() - dateB.getTime();
    });

    drugLabels.forEach((originalDrugLabel: DrugLabel, index: number) => {
      console.log(index);
      for (let i = index + 1; i < drugLabels.length; i++) {
        const mutatedDrugLabel: DrugLabel = drugLabels[i];
        console.log(`Processing diff ${originalDrugLabel.published_date} v. ${mutatedDrugLabel.published_date}`);

        originalDrugLabel.sections.forEach((originalDrugLabelSection: DrugLabelSection) => {
          // create the label diff object now that the second label has been fetched
          const labelDiff: DrugLabelDiff = {
            originalLabelSplId: originalDrugLabel.spl_id,
            mutatedLabelSplId: mutatedDrugLabel.spl_id,
            sections: []
          };

          const mutatedDrugLabelSection = _.find(mutatedDrugLabel.sections, (section: DrugLabelSection) => {
            return section.name === originalDrugLabelSection.name;
          });

          if (!mutatedDrugLabelSection) {
            return;
          }

          const diffingTool = new DiffMatchPatch();
          const diffs = diffingTool.diff_main(originalDrugLabelSection.text, mutatedDrugLabelSection.text);
          diffingTool.diff_cleanupSemantic(diffs);

          labelDiff.sections.push({
            name: originalDrugLabelSection.name,
            originalLabelSectionText: originalDrugLabelSection.text,
            mutatedLabelSectionText: mutatedDrugLabelSection.text,
            diff: diffingTool.diff_prettyHtml(diffs).replace(/&para;/g, '').replace(/<br>/g, '')
          });

          drugLabelDiffs.push(labelDiff);
        });
      };
    });
    console.log(drugLabelDiffs);
    return drugLabelDiffs;
  }
}
//   processDrugLabelDiffs(drugLabels: any): DrugLabelDiff[] {
//     const drugLabelDiffs: DrugLabelDiff[] = [];
//
//     // sort the drug labels by date of publication
//     drugLabels.sort((a: any, b: any) => {
//       const dateA = new Date(a.published_date);
//       const dateB = new Date(b.published_date);
//       return dateA.getTime() - dateB.getTime();
//     });
//
//     // for each drug label...
//     drugLabels.forEach((firstLabel: any, index: number) => {
//
//       // if theres no next label then exit, otherwise get the next label
//       if (drugLabels[ index + 1] === undefined) {
//         console.log('Diff calculation completed');
//         return;
//       }
//       const secondLabel = drugLabels[ index + 1];
//
//       // create the label diff object now that the second label has been fetched
//       const labelDiff: DrugLabelDiff = {
//         firstLabelSplId: firstLabel.spl_id,
//         secondLabelSplId: secondLabel.spl_id,
//         sections: [ ]
//       };
//
//       console.log(`Calculating diff between label with publication date ${firstLabel.published_date} and label with publication date ${secondLabel.published_date}`);
//
//
//       firstLabel.sections.forEach((firstLabelSection: DrugLabelSection) => {
//
//         // get the corresponding section in the next drug label
//         const secondLabelSection = _.find(secondLabel.sections, (section: DrugLabelSection) => {
//           return section.name === firstLabelSection.name;
//         });
//
//         const diffingTool = new DiffMatchPatch();
//         const diffs = diffingTool.diff_main(firstLabelSection.text, secondLabelSection.text);
//         diffingTool.diff_cleanupSemantic(diffs);
//         const onePageHtmlSectionsWithDiffs = diffingTool.diff_prettyHtml(diffs).replace(/&para;/g, '').replace(/<br>/g, '');
//         labelDiff.sections.push({
//           name: firstLabelSection.name,
//           firstLabelSectionText: firstLabelSection.text,
//           secondLabelSectionText: secondLabelSection.text,
//           htmlFormattedDiff: diffs
//         });
//       });
//
//       drugLabelDiffs.push(labelDiff);
//     });
//     console.log(drugLabelDiffs);
//     return drugLabelDiffs;
//   }
// }

// export interface Drug {
//
// }
//

export interface DrugLabel {
  application_numbers: string[];
  published_date: string;
  sections: DrugLabelSection[];
  setid: string;
  spl_id: string;
  spl_version: string;
}

//
// export interface DrugPatent {
//
// }

export interface DrugLabelSection {
  name: string;
  text: string;
}


export interface DrugLabelDiff {
  originalLabelSplId: string;
  mutatedLabelSplId: string;
  sections: {
    name: string;
    originalLabelSectionText: string;
    mutatedLabelSectionText: string;
    diff: any;
  }[];
}
