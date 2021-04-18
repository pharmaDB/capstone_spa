import {Component, Input, Output, EventEmitter} from '@angular/core';
import {DrugViewConfig} from '../drug-view-config.interface';
import {DrugViewMode} from '../drug-view-config.interface';

@Component({
  selector: 'app-drug-text',
  templateUrl: './drug-text.component.html',
  styleUrls: ['./drug-text.component.scss']
})
export class DrugTextComponent {
  @Output() onPatentClaimTagClicked = new EventEmitter<any>();
  @Output() onClosePatentViewClicked = new EventEmitter<any>();
  @Input() drugViewConfig: DrugViewConfig;

  constructor() {
  }

  patentClaimTagClickHandler(patentNumber: string, claimNumber: number): void {
    console.log(patentNumber, claimNumber);
    this.onPatentClaimTagClicked.emit({
      patent_number: patentNumber,
      claim_number: claimNumber
    });
  }

  closePatentViewClickHandler(): void {
    this.onClosePatentViewClicked.emit();
  }

  public get DrugViewMode(): typeof DrugViewMode {
    return DrugViewMode;
  }

}
