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
    console.log(this.searchQuery);
    // this.searchResults = this.searchResults.concat([{
    //   brandName: "Lipitor",
    //   manufacturer: "Big Pharama",
    //   activeIngredients: ["this", "that", "the other"],
    //   patentCount: 3,
    //   labelCount: 4,
    //   packagings: ['lipitor 25mg', 'lipitor 85mg', 'lipitor 15mg']
    // }]);

    this.drugService.findDrug(this.searchQuery.searchQuery, this.searchQuery.searchType).subscribe((response: OpenFDADrug[]) => {
      this.isLoadingResults = false;
      this.searchResults = [];

      response.forEach((result: OpenFDADrug) => {
        this.searchResults.push(result);
      });
    });
  }

}
