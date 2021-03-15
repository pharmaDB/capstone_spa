import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-drug-header',
  templateUrl: './drug-header.component.html',
  styleUrls: ['./drug-header.component.scss']
})
export class DrugHeaderComponent implements OnInit {
  @Input() drug: any;

  constructor() { }

  ngOnInit(): void {
    console.log(this.drug);
  }

}
