import {Component, Input, OnInit, SimpleChanges} from '@angular/core';
import {DrugViewConfig} from '../drug-view-config.interface';
import {DrugViewMode} from '../drug-view-mode.enum';

@Component({
  selector: 'app-drug-text',
  templateUrl: './drug-text.component.html',
  styleUrls: ['./drug-text.component.scss']
})
export class DrugTextComponent implements OnInit {
  drugViewMode = DrugViewMode;
  @Input() textWindowOne: any | undefined;
  @Input() textWindowTwo: any | undefined;

  constructor() { }

  ngOnInit(): void {
    console.log(this.textWindowOne);
    this.textWindowOne
  }

}
