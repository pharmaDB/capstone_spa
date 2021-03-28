import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {DrugService} from '../../shared/services/drug.service';
import {DrugViewMode} from '../drug-view-mode.enum';
import {DrugViewConfig} from '../drug-view-config.interface';

@Component({
  selector: 'app-drug',
  templateUrl: './drug.component.html',
  styleUrls: ['./drug.component.scss']
})
export class DrugComponent implements OnInit {
  drugViewConfig: DrugViewConfig = { drugViewMode: DrugViewMode.none };
  isPageLoading = true;
  ndaNumber: string;
  drug: any;

  constructor(
    private route: ActivatedRoute,
    private drugService: DrugService
  ) { }

  onDrugViewChange(drugViewConfig: DrugViewConfig): void {
    this.drugViewConfig = drugViewConfig;
  }

  ngOnInit() {
    this.ndaNumber = this.route.snapshot.params.NDANumber;

    this.drugService.getDrugByApplicationNumber(this.ndaNumber).subscribe((response) => {
      this.isPageLoading = false;
      this.drug = response;
      console.log(response);
    });
    console.log(this.ndaNumber);
  }

}
