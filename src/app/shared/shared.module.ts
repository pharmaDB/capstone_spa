import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

/**
 * Custom Component
 */
import { NavbarComponent } from './navbar/navbar.component';
import { ShortestValueFromArrayPipe } from './pipes/shortest-value-from-array.pipe';
import { TruncatePipe } from './pipes/truncate.pipe';



@NgModule({
  declarations: [
    NavbarComponent,
    ShortestValueFromArrayPipe,
    TruncatePipe
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavbarComponent,
    ShortestValueFromArrayPipe,
    TruncatePipe
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class SharedModule {

  // static forRoot(): ModuleWithProviders {
  //   return {
  //     ngModule: SharedModule,
  //     providers: [  // add services here
  //                 ]
  //   };
  // }

}
