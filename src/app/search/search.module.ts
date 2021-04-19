import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';

import {SearchComponent} from './search/search.component';
import {SearchBarComponent} from './search-bar/search-bar.component';
import {SearchResultsComponent} from './search-results/search-results.component';
import {SharedModule} from '../shared/shared.module';

/**
 * SearchModule
 * The SearchModule is responsible for importing and providing access to all of the components related to the
 * search view. The top level app module imports this module so that it can show the search component on the
 * search route.
 */
@NgModule({
  declarations: [SearchComponent, SearchBarComponent, SearchResultsComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class SearchModule {
}
