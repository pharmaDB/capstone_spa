import { Component, Input } from '@angular/core';

/**
 * DrugHeader Component
 * The DrugHeader component is responsible for displaying the name of the Drug whose labels and patents are currently being viewed. It also
 * provides convenient modals for viewing Drug Metadata.
 */
@Component({
  selector: 'app-drug-header',
  templateUrl: './drug-header.component.html',
  styleUrls: ['./drug-header.component.scss']
})
export class DrugHeaderComponent {
  @Input() drug: any;

  constructor() { }

}
