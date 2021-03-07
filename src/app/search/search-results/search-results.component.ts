import { Component, OnInit, Input } from '@angular/core';
import { OpenFDADrug } from 'src/app/shared/services/open-fdadrug.interface';
import { SearchResult } from '../search-result.interface';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {
  @Input() searchResults: OpenFDADrug[];
  @Input() isLoadingResults: boolean;

  constructor() { }

  ngOnInit(): void {
    
  }

  ngOnChanges(): void {
    console.log(this.searchResults);
  }

}
