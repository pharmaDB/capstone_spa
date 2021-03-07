import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { SearchQuery } from '../search-query.interface';
import { DrugSearchType } from '../drug-search-type.enum';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  public drugSearchTypes = DrugSearchType;
  searchQuery: SearchQuery;
  @Output() onSearchQueryChange = new EventEmitter<SearchQuery>();

  searchForm = new FormGroup({
    searchType: new FormControl('brand_name'),
    searchQuery: new FormControl(''),
  });

  constructor() {
  }

  onSearchTypeClicked(searchType: string): void {
    this.searchForm.controls['searchType'].setValue(searchType);    
  }

  getDrugSearchTypeValue(drugSearchTypeKey: string) {
    return DrugSearchType[drugSearchTypeKey as keyof typeof DrugSearchType];
  }

  ngOnInit(): void {
    this.searchForm.valueChanges.subscribe((newVal: SearchQuery) => {
      this.onSearchQueryChange.emit(newVal);
    })
  }

}
