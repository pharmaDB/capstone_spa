import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {OpenFDADrug} from './open-fdadrug.interface';
import { environment } from '../../../environments/environment';

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
    console.log(environment.apiUrl);
    // TODO: replace this string URL with an environment variable that points to the location of the API
    return this.http.get(`${environment.apiUrl}/drugs?searchQuery=${searchQuery}&searchType=${searchType}`) as Observable<OpenFDADrug[]>;
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
    console.log(environment.apiUrl);
    // TODO: replace this string URL with an environment variable that points to the location of the API
    return this.http.get(`${environment.apiUrl}/drugs/${ndaNumber}?splHistory=${getSPLHistoryMetadata}&images=${getImages}&currentSplLabel=${getCurrentSplLabel}&labels=${getLabels}&patents=${getPatents}`);
  }
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
