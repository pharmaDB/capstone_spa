import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {DiffMatchPatch} from 'diff-match-patch-ts';
import * as _ from 'lodash';
import {OpenFDADrug} from './open-fdadrug.interface';

/**
 * The DrugService is the primary (and currently only) service responsible for the
 * web applications interfacing with the backend web application API. From this
 * service requests can be made for drug search queries and well as for drug
 * information which can include drug metadata, drug labels and drug patents
 */

@Injectable({
  providedIn: 'root'
})
export class DrugService {

  constructor(private http: HttpClient) {
  }

  /**
   * Find an drug based on the provided search query and the search type
   * @param searchQuery String: the query by which a drug will be sought
   * @param searchType String: field the query will be applied to (brand_name, active_ingredients, application_number, or manufacturer_name)
   * @returns Observable<OpenFDADrug[]>: an array of matching drugs and their metadata in the OpenFDADrug typing
   */
  findDrug(searchQuery: string, searchType: string): Observable<OpenFDADrug[]> {
    // change the URL depending on the environment
    return this.http.get(`http://localhost:3000/drugs?searchQuery=${searchQuery}&searchType=${searchType}`) as Observable<OpenFDADrug[]>;
  }

  /**
   * Get all of a Drug data using the drugs NDA number
   * @param ndaNumber string: the NDA number of the drug being fetched. Must be a valid FDA NDA Number associated with an FDA drug
   * @returns TODO: add a return typing for this request
   */
  getDrugByApplicationNumber(ndaNumber: string): Observable<any> {
    const getCurrentSplLabel = false;
    const getSPLHistoryMetadata = false;
    const getImages = true;
    const getLabels = true;
    const getPatents = true;

    // change the URL depending on the environment
    return this.http.get(`http://localhost:3000/drugs/${ndaNumber}?splHistory=${getSPLHistoryMetadata}&images=${getImages}&currentSplLabel=${getCurrentSplLabel}&labels=${getLabels}&patents=${getPatents}`);
  }

  /**
   *
   * @param drugLabels
   */
//   processDrugLabelDiffs(drugLabels: DrugLabel[]): DrugLabelDiff[] {
//     const drugLabelDiffs: DrugLabelDiff[] = [];
//
//     // sort the drug labels by date of publication
//     drugLabels.sort((a: DrugLabel, b: DrugLabel) => {
//       const dateA = new Date(a.published_date);
//       const dateB = new Date(b.published_date);
//       return dateA.getTime() - dateB.getTime();
//     });
//
//     drugLabels.forEach((originalDrugLabel: DrugLabel, index: number) => {
//       console.log(index);
//       for (let i = index + 1; i < drugLabels.length; i++) {
//         const mutatedDrugLabel: DrugLabel = drugLabels[i];
//         console.log(`Processing diff ${originalDrugLabel.published_date} v. ${mutatedDrugLabel.published_date}`);
//
//         originalDrugLabel.sections.forEach((originalDrugLabelSection: DrugLabelSection) => {
//           // create the label diff object now that the second label has been fetched
//           const labelDiff: DrugLabelDiff = {
//             originalLabelSplId: originalDrugLabel.spl_id,
//             mutatedLabelSplId: mutatedDrugLabel.spl_id,
//             sections: []
//           };
//
//           const mutatedDrugLabelSection = _.find(mutatedDrugLabel.sections, (section: DrugLabelSection) => {
//             return section.name === originalDrugLabelSection.name;
//           });
//
//           if (!mutatedDrugLabelSection) {
//             return;
//           }
//
//           const diffingTool = new DiffMatchPatch();
//           const diffs = diffingTool.diff_main(originalDrugLabelSection.text, mutatedDrugLabelSection.text);
//           diffingTool.diff_cleanupSemantic(diffs);
//
//           labelDiff.sections.push({
//             name: originalDrugLabelSection.name,
//             originalLabelSectionText: originalDrugLabelSection.text,
//             mutatedLabelSectionText: mutatedDrugLabelSection.text,
//             diff: diffingTool.diff_prettyHtml(diffs).replace(/&para;/g, '').replace(/<br>/g, '')
//           });
//
//           drugLabelDiffs.push(labelDiff);
//         });
//       }
//     });
//     console.log(drugLabelDiffs);
//     return drugLabelDiffs;
//   }
}


/**
 * BELOW
 * Types/Interfaces Directly Related to objects fetched via the Drug Service
 */


export interface IPharmaDBGetByNDAResponse {
  applicationNumber: string;
  metadata: any;
  drugLabels: IPharmaDBDrugLabel[];
  drugPatents: IPharmaDBDrugPatent[];
}

/**
 * DrugLabel represents the Label associated with a Drugs NDA Number and
 * includes identifiers for the fetched, previous and next labels as well
 * as diffs between the fetched and previous labels and published dates
 */
export interface IPharmaDBDrugLabel {
  '_id': {
    '$oid': string
  };
  'application_numbers': string[];
  'set_id': string;
  'spl_id': string;
  'spl_version': string;
  'published_date': string;
  'sections': IPharmaDBDrugLabelSection[];
  'previous_label_published_date': string | null;
  'previous_label_spl_id': string | null;
  'previous_label_spl_version': string | null;
  'next_label_published_date': string | null;
  'next_label_spl_id': string | null;
  'next_label_spl_version': string | null;
  'diff_against_previous_label': IPharmaDBDrugLabelDiffAgainstPreviousLabel[];
  'additions': any[];
}

export interface IPharmaDBDrugLabelDiffAgainstPreviousLabel {
  'name': string;
  'text': any[][];
  'parent': string | null;
  'additions': {
    'indices': number[];
    'expanded_context': string;
    'scores':
      {
        'patent_number': string;
        'claim_number': number;
        'parent_claim_numbers': number[];
        'score': number;
      }[]
  }[];
}

export interface IPharmaDBDrugLabelSection {
  'name': string;
  'text': string;
  'parent': string | null;
}

export interface IPharmaDBDrugPatent {
  '_id': {
    '$oid': string;
  };
  'patent_number': string;
  'expiration_date': string;
  'claims': {
    'claim_number': number;
    'claim_text': string;
    'dependencies': string | null;
  }[];
}


// DEPRECATE CODE IS BELOW

// export interface DrugLabel {
//   application_numbers: string[];
//   published_date: string;
//   sections: DrugLabelSection[];
//   setid: string;
//   spl_id: string;
//   spl_version: string;
// }

/**
 * DrugLabelSection represents a subsection of the drug label and includes
 * that sections header name, body text, diff against the previous label
 * and the relatives scores against patents
 */
// export interface DrugLabelSection {
//   name: string;
//   text: string;
//   scores?: DrugLabelSectionPatentScore[];
// }

/**
 * DrugLabelSectionPatentScore represents the ML scoring a portion of the
 * drug label has against any relevant patent claims.
 */
// export interface DrugLabelSectionPatentScore {
//   patentNumber: string;
//   claimNumber: number;
//   parentClaimNumbers: number[];
//   score: number;
// }

/**
 * DrugLabelDiff represents the differences between the label fetched and
 * the previous version of that label
 */
// export interface DrugLabelDiff {
//   originalLabelSplId: string;
//   mutatedLabelSplId: string;
//   sections: {
//     name: string;
//     originalLabelSectionText: string;
//     mutatedLabelSectionText: string;
//     diff: any;
//   }[];
// }
