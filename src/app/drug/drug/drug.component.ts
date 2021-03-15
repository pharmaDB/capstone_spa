import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DrugService } from '../../shared/services/drug.service';

@Component({
  selector: 'app-drug',
  templateUrl: './drug.component.html',
  styleUrls: ['./drug.component.scss']
})
export class DrugComponent implements OnInit {
  isPageLoading = true;
  ndaNumber: string;
  drug: any;

  constructor(
    private route: ActivatedRoute,
    private drugService: DrugService,
  ) { }

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
