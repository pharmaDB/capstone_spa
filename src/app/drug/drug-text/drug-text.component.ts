import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import {DrugViewConfig} from '../drug-view-config.interface';
import {DrugViewMode} from '../drug-view-config.interface';
import {IPharmaDBDrugLabel, IPharmaDBDrugLabelDiffAgainstPreviousLabel } from '../../shared/services/drug.service';

/**
 * DrugText Component
 * The DrugText component is responsible for rending all the text that shows on the Drug view. This includes labels, patents and their
 * respective panels. It also handles any events that may occur on the text itself such as the user selecting a patent claim tag. The
 * DrugText component gets its information from its prent, the DrugComponent which is also notified of events that occur on the DrugText
 * component via event emitters after which the DrugComponent coordinates state changes and passes that info along to other child
 * components of the DrugComponent
 */
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

  /**
   * patentClaimTagClickHandler
   * The patentClaimTagClickHandler is fired once a patent tag (the element that shows a patent is relevant to a specific label section)
   * is clicked. Once this is fired, an event is emitted to let the parent, Drug component know that the event has occurred and its values.
   * @param patentNumber string: the patent number specified in the patent claim tag that was clicked
   * @param claimNumber string: the claim number specified in the patent claim tag that was clicked
   */
  patentClaimTagClickHandler(patentNumber: string, claimNumber: number): void {
    this.onPatentClaimTagClicked.emit({
      patent_number: patentNumber,
      claim_number: claimNumber
    });
  }

  /**
   * closePatentViewClickHandler
   * The closePatentViewClickHandler is meant to be fired once the user clicks the close button/icon to remove a patent from the view. This
   * is basically the opposite of patentClaimTagClickHandler and closes the window that results from patentClaimTagHandler being fired.
   * Once this is fired, an event is emitted to let the parent, Drug component know that the event has occurred. However, the event has no
   * values.
   */
  closePatentViewClickHandler(): void {
    this.onClosePatentViewClicked.emit();
  }

  handleTextDiffClicked(): void {
    console.log('diff clicked');
  }

  /**
   * get DrugViewMode template helper
   * DrugViewMode is a template helper function meant to make the current DrugViewMode enum value more easily accessible for angular html
   * templating
   */
  public get DrugViewMode(): typeof DrugViewMode {
    return DrugViewMode;
  }

}
