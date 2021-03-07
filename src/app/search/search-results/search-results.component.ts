import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    
  }

  goToDrug(drugNDANumber: string) {
    this.router.navigate(['/drugs', drugNDANumber ]);
  }

  ngOnChanges(): void {
    console.log(this.searchResults);
  }

}
