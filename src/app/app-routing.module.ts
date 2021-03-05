import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router

import { SearchComponent } from './search/search/search.component';
import { ViewComponent } from './view/view/view.component';

const routes: Routes = [
  { path: 'search', component: SearchComponent },
  { path: 'view', component: ViewComponent },
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
