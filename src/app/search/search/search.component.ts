import { Component, OnInit } from '@angular/core';
import { SearchQuery } from '../search-query.interface';
import { SearchResult } from '../search-result.interface';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchQuery: SearchQuery = {
    searchQuery: 'wefewf',
    searchType: 'ewfwef'
  }

  searchResults: SearchResult[] = [];

  constructor() { }

  ngOnInit(): void {
  }
  
  onSearchQueryChange(newSearchQuery: SearchQuery) {
    this.searchQuery = newSearchQuery;
    this.searchResults = this.searchResults.concat([{
      brandName: "Lipitor",
      manufacturer: "Big Pharama",
      activeIngredients: ["this", "that", "the other"],
      patentCount: 3,
      labelCount: 4,
      packagings: ['lipitor 25mg', 'lipitor 85mg', 'lipitor 15mg']
    }]);
  }

}
