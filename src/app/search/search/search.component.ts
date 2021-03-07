import { Component, OnInit } from '@angular/core';
import { SearchQuery } from '../search-query.interface';
import { SearchResult } from '../search-result.interface';

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
  }

  searchResults: OpenFDADrug[] = [];

  constructor(private drugService: DrugService) {
    drugService.test();
  }

  ngOnInit(): void {
  }
  
  onSearchQueryChange(newSearchQuery: SearchQuery) {
    this.searchQuery = newSearchQuery;
    this.isLoadingResults = true;
    this.searchResults = [];
    console.log(this.searchQuery);
  
    if (newSearchQuery.searchQuery.length > 3) {
      this.searchStatus = 'searching...';
      this.drugService.findDrug(this.searchQuery.searchQuery, this.searchQuery.searchType).subscribe((response: OpenFDADrug[]) => {
        this.isLoadingResults = false;

        response.forEach((result: OpenFDADrug) => {
          this.searchResults.push(result);
        });

        this.searchStatus =`found ${this.searchResults.length} drugs with a ${DrugSearchType[this.searchQuery.searchType as keyof typeof DrugSearchType]} matching "${this.searchQuery.searchQuery}"`
      });
    } else {
      this.searchStatus = `${newSearchQuery.searchQuery.length == 0 ? 'begin' : 'continue'} typing to see search results below`;
    }
  }

}
