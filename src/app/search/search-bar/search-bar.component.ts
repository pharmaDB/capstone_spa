import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { SearchQuery } from '../search.interface';
import { DrugSearchType } from '../drug-search-type.enum';
import {OpenFDADrug} from '../../shared/services/open-fdadrug.interface';

/**
 * SearchBar Component
 * The SearchBar Component is responsible for taking in the user input from the search bar, search type and search filter and triggering
 * the Search component to make an return a query for Drug matches
 */
@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  public drugSearchTypes = DrugSearchType;
  searchQuery: SearchQuery;
  @Output() onSearchQueryChange = new EventEmitter<SearchQuery>(); // emit changes in searchQuery from this component to parent
  @Input() searchResults: OpenFDADrug[]; // provide searchResults from parent to this component

  // create the form by which all UI input for the search bar is managed
  searchForm = new FormGroup({
    searchType: new FormControl('brand_name'),
    sortParameter: new FormControl('brand_name'),
    searchQuery: new FormControl(''),
  });

  constructor() {
  }

  /**
   * onSearchTypeClicked handler
   * handles actions when the user clicks a search type button near the search bar.
   * @param searchType String: search type the user wants to run (brand_name, active_ingredients, application_number, or manufacturer_name)
   */
  onSearchTypeClicked(searchType: string): void {
    // set the searchForm searchType value to the type of search the user wants to perform
    this.searchForm.controls.searchType.setValue(searchType);
  }

  /**
   * onSortParameterClicked handler
   * handler actions when the user clicks a sorting type near the search bar
   * @param sortParameter String: param results will be sorted by (brand_name, active_ingredients, application_number, or manufacturer_name)
   */
  onSortParameterClicked(sortParameter: string): void {
    this.searchForm.controls.sortParameter.setValue(sortParameter);
  }

  /**
   * getDrugSearchTypeValue utility method
   * used for templating, get the current search type human readable string from the drug search type enum using the provided search type
   * key
   * @param drugSearchTypeKey String: a valid drug search type that exists in the DrugSearchType enum
   * @returns DrugSearchType String: human readable variation of the drug search type enum
   */
  getDrugSearchTypeValue(drugSearchTypeKey: string): DrugSearchType {
    return DrugSearchType[drugSearchTypeKey as keyof typeof DrugSearchType];
  }

  ngOnInit(): void {

    // on init, the form that makes up the search bar component will be observed for changes...
    this.searchForm.valueChanges.subscribe((newSearchQuery: SearchQuery) => {
      // ... once changes are detected, an event will be emitted that propagates the new search query specs to the parent component
      this.onSearchQueryChange.emit(newSearchQuery);
    });
  }

}
