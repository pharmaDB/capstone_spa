import { Component, OnInit, Input } from '@angular/core';
import { SearchResult } from '../search-result.interface';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {
  @Input() searchResults: SearchResult[];

  constructor() { }

  ngOnInit(): void {
    
  }

  ngOnChanges(): void {
    console.log(this.searchResults);
  }

}
