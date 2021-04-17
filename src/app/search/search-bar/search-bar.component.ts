import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { SearchQuery } from '../search.interface';
import { DrugSearchType } from '../drug-search-type.enum';
import {OpenFDADrug} from '../../shared/services/open-fdadrug.interface';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  public drugSearchTypes = DrugSearchType;
  searchQuery: SearchQuery;
  @Output() onSearchQueryChange = new EventEmitter<SearchQuery>();
  @Input() searchResults: OpenFDADrug[];

  searchForm = new FormGroup({
    searchType: new FormControl('brand_name'),
    sortParameter: new FormControl('brand_name'),
    searchQuery: new FormControl(''),
  });

  constructor() {
  }

  onSearchTypeClicked(searchType: string): void {
    this.searchForm.controls.searchType.setValue(searchType);
  }

  onSortParameterClicked(sortParameter: string): void {
    this.searchForm.controls.sortParameter.setValue(sortParameter);
    console.log(`sorting by ${this.searchForm.controls.sortParameter.value}`);
  }

  getDrugSearchTypeValue(drugSearchTypeKey: string): DrugSearchType {
    return DrugSearchType[drugSearchTypeKey as keyof typeof DrugSearchType];
  }

  ngOnInit(): void {
    this.searchForm.valueChanges.subscribe((newVal: SearchQuery) => {
      this.onSearchQueryChange.emit(newVal);
    });
  }

}
