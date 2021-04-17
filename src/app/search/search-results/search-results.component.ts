import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { OpenFDADrug } from 'src/app/shared/services/open-fdadrug.interface';

/**
 * SearchResults Component
 * The SearchResults Component is responsible for housing all of the search results entries. Its template contains
 * a list that houses each search result, displays its data and provides a link to allow the user to continue on to
 * view that Drugs patents and labels
 */
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

  /**
   * Handler that fires once the user clicks the view button on a search result entry
   * Uses the router to reroute to the the drug view with the correct NDA number present.
   * The Drug view will then load the Drugs data via NDA number and show patents/labels
   * @param drugNDANumber String: a valid NDA Number from one of the search results provided
   */
  goToDrug(drugNDANumber: string): void {
    this.router.navigate(['/drugs', drugNDANumber ]);
  }

}
