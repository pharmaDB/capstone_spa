import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrugComponent } from './drug/drug.component';
import { DrugHeaderComponent } from './drug-header/drug-header.component';



@NgModule({
  declarations: [DrugComponent, DrugHeaderComponent ],
  imports: [
    CommonModule
  ]
})
export class DrugModule { }
