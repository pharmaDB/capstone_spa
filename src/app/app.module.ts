import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { SearchModule } from './search/search.module';
import { DrugModule } from './drug/drug.module';

/**
 * App Module
 * The main, top level angular module that imports all of the lower level modules such as the shared module and modules
 * responsible for controlling the web application views (Search view/component module and Drug view/component module)
 */

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    SearchModule,
    DrugModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
