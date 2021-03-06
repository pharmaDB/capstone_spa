import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { DrugSearchType } from '../../search/drug-search-type.enum';
import { OpenFDADrug } from './open-fdadrug.interface';

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
    return this.http.get(`http://localhost:7000/drugs?searchQuery=${searchQuery}&searchType=${searchType}`);
  }

  test() {
    console.log('test');
  }
}
