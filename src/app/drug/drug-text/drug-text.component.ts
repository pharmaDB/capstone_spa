import {Component, Input, OnInit, SimpleChanges, OnChanges, Output, EventEmitter} from '@angular/core';
import { DrugViewConfig } from '../drug-view-config.interface';
import { DrugViewMode } from '../drug-view-mode.enum';

@Component({
  selector: 'app-drug-text',
  templateUrl: './drug-text.component.html',
  styleUrls: ['./drug-text.component.scss']
})
export class DrugTextComponent implements OnInit, OnChanges {
  @Output() onPatentClaimTagClicked = new EventEmitter<any>();
  @Input() drugViewConfig: DrugViewConfig;

  constructor() { }

  patentClaimTagClickHandler(): void {
    this.onPatentClaimTagClicked.emit({
      patent_number: '123123',
      claim_number: 'wefwef'
    });
  }

  public get DrugViewMode(): typeof DrugViewMode {
    return DrugViewMode;
  }

  ngOnChanges(): void {
    console.log(this.drugViewConfig);
  }

  ngOnInit(): void {
    console.log(this.drugViewConfig);
  }

}
