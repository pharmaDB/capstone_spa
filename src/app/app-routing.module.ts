import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router

import { SearchComponent } from './search/search/search.component';
import { DrugComponent } from './drug/drug/drug.component';

const routes: Routes = [
  { path: 'search', component: SearchComponent },
  { path: 'drug/:NDANumber', component: DrugComponent },
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
