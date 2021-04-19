import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router

import { SearchComponent } from './search/search/search.component';
import { DrugComponent } from './drug/drug/drug.component';

/**
 * Spec out the routes for the web application. The routes listed in the below object will be associated with the component
 * also listed. Once the route is visited by the browser, the component will be rendered in place of the router outlet
 * tag in the main app template (app.component.html)
 */
const routes: Routes = [
  { path: 'search', component: SearchComponent },
  { path: 'drugs/:NDANumber', component: DrugComponent },
  { path: '**',   redirectTo: 'search' }, // a catch all, any non specified route will redirect to /search (including root /)
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
