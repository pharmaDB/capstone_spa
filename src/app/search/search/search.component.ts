import { Component, OnInit } from '@angular/core';
import { SearchQuery } from '../search.interface';
import * as _ from 'lodash';

import { DrugService } from '../../shared/services/drug.service';
import { DrugSearchType } from '../drug-search-type.enum';
import { OpenFDADrug } from 'src/app/shared/services/open-fdadrug.interface';

/**
 * Search Component
 * The Search component is responsible for managing the SearchBar component and the SearchResults component and coordinating data
 * sharing between the two via @inputs and @outputs. Queries to the Drug service for searches are made in this Search component.
 */

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

  /**
   * onSearchQueryChange Event Handler
   * onSearchQueryChange should fire when a OnSearchQueryChange event from the SearchBar component is observed. Once one is observed, the
   * Search component will conduct a search using the searchQuery parameters and store the results in searchResults for the SearchResults
   * component to take in.
   * @param newSearchQuery SearchQuery: parameters by which the search query will be conducted using the Drug service
   */
  onSearchQueryChange(newSearchQuery: SearchQuery): void {
    this.searchQuery = newSearchQuery;
    this.isLoadingResults = true;
    this.searchResults = [];

    // if the user has typed in three chars or more...
    if (newSearchQuery.searchQuery.length > 3) {
      // change the search status shown in the HTML to searching
      this.searchStatus = 'searching...';

      // use the drugService to make a query for drugs matching the provided SearchQuery
      this.drugService.findDrug(this.searchQuery.searchQuery, this.searchQuery.searchType).subscribe((response: OpenFDADrug[]) => {
        this.isLoadingResults = false;

        const unsortedSearchResults: OpenFDADrug[] = [ ];

        // only drugs whose FDA Application number starts with 'NDA' should show up in results, so not 'ANDA' or anything else
        response.forEach((result: OpenFDADrug) => {
          if (result.application_number.startsWith('NDA')) {
            unsortedSearchResults.push(result);
          }
        });

        // sort search results in alphabetical order, this basically groups similar brand_named results together among the results ordering
        this.searchResults = _.sortBy(unsortedSearchResults, [(o) => o.openfda.brand_name.reduce((a, b) => a.length <= b.length ? a : b)]);

        // change search status shown in the HTML to reflect the number of matches and on what SearchQuery parameters the matches were found
        this.searchStatus = `found ${this.searchResults.length} drugs with a ${DrugSearchType[this.searchQuery.searchType as keyof typeof DrugSearchType]} matching "${this.searchQuery.searchQuery}"`;
      });
    } else {
      // if the user has not typed in three chars or more, tell them to continue typing to see results
      this.searchStatus = `${newSearchQuery.searchQuery.length === 0 ? 'begin' : 'continue'} typing to see search results below`;
    }
  }

  ngOnInit(): void {
  }
}
