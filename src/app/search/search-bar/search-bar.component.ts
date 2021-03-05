import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { SearchQuery } from '../search-query.interface';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  searchQuery: SearchQuery;
  @Output() onSearchQueryChange = new EventEmitter<SearchQuery>();

  searchForm = new FormGroup({
    searchType: new FormControl(''),
    searchQuery: new FormControl(''),
  });

  constructor() { }

  ngOnInit(): void {
    this.searchForm.valueChanges.subscribe((newVal: SearchQuery) => {
      this.onSearchQueryChange.emit(newVal);
    })
  }

}
