import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrugComponent } from './drug/drug.component';
import { DrugHeaderComponent } from './drug-header/drug-header.component';

import { SharedModule } from '../shared/shared.module';
import { DrugTextComponent } from './drug-text/drug-text.component';
import { DrugTimelineComponent } from './drug-timeline/drug-timeline.component';



@NgModule({
  declarations: [DrugComponent, DrugHeaderComponent, DrugTextComponent, DrugTimelineComponent ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class DrugModule { }
