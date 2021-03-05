import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-drug',
  templateUrl: './drug.component.html',
  styleUrls: ['./drug.component.scss']
})
export class DrugComponent implements OnInit {
  ndaNumber: string;

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.ndaNumber = this.route.snapshot.params.NDANumber;
  }

}
