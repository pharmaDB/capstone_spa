import { Component, OnInit } from '@angular/core';
import { SearchQuery } from '../search-query.interface';
import { SearchResult } from '../search-result.interface';
import * as _ from 'lodash';

import { DrugService } from '../../shared/services/drug.service';
import { DrugSearchType } from '../drug-search-type.enum';
import { OpenFDADrug } from 'src/app/shared/services/open-fdadrug.interface';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  isLoadingResults = false;
  searchStatus = 'begin typing to see search results below';
  searchQuery: SearchQuery = {
    searchQuery: '',
    searchType: 'brand_name'
  };

  searchResults: OpenFDADrug[] = [];

  constructor(private drugService: DrugService) { }

  ngOnInit(): void {
  }

  onSearchQueryChange(newSearchQuery: SearchQuery): void {
    this.searchQuery = newSearchQuery;
    this.isLoadingResults = true;
    this.searchResults = [];

    if (newSearchQuery.searchQuery.length > 3) {
      this.searchStatus = 'searching...';
      this.drugService.findDrug(this.searchQuery.searchQuery, this.searchQuery.searchType).subscribe((response: OpenFDADrug[]) => {
        this.isLoadingResults = false;

        const unsortedSearchResults: OpenFDADrug[] = [ ];
        response.forEach((result: OpenFDADrug) => {
          // only drugs whose FDA Application number starts with 'NDA' should show up in results, so not 'ANDA' or anything else
          if (result.application_number.startsWith('NDA')) {
            unsortedSearchResults.push(result);
          }
        });

        // sort search results in alphabetical order, this basically groups similar brand_named results together among the results ordering
        this.searchResults = _.sortBy(unsortedSearchResults, [(o) => o.openfda.brand_name.reduce((a, b) => a.length <= b.length ? a : b)]);

        this.searchStatus = `found ${this.searchResults.length} drugs with a ${DrugSearchType[this.searchQuery.searchType as keyof typeof DrugSearchType]} matching "${this.searchQuery.searchQuery}"`;
      });
    } else {
      this.searchStatus = `${newSearchQuery.searchQuery.length === 0 ? 'begin' : 'continue'} typing to see search results below`;
    }
  }

}
