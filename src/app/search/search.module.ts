import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';


import { SearchComponent } from './search/search.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { SearchResultsComponent } from './search-results/search-results.component';



@NgModule({
  declarations: [SearchComponent, SearchBarComponent, SearchResultsComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class SearchModule { }
