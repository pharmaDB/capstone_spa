import {Component, EventEmitter, Input, Output} from '@angular/core';
import {DrugViewConfig} from '../drug-view-config.interface';

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
  @Input() drugViewConfig: DrugViewConfig;
  @Output() onSetIdClicked = new EventEmitter<string>();

  constructor() { }

  handleSetIdClicked(setId: string): void {
    this.onSetIdClicked.emit(setId);
  }
}
