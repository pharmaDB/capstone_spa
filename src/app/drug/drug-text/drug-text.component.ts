import {Component, EventEmitter, Input, Output} from '@angular/core';
import {DrugViewConfig, DrugViewMode} from '../drug-view-config.interface';

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
  @Output() onClosePatentViewClicked = new EventEmitter<any>();
  @Output() onDiffAdditionClicked = new EventEmitter<any>();
  @Output() onDrugViewChange = new EventEmitter<DrugViewConfig>();   // event emitter use to notify the parent of required Drug view changes
  DrugViewConfig: DrugViewConfig;

  @Input() set drugViewConfig(value: DrugViewConfig) {
    this.DrugViewConfig = value;
  }

  get drugViewConfig(): DrugViewConfig {
    return this.DrugViewConfig;
  }

  constructor() {
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

  diffAdditionClickHandler(textDiff: any): void {
    this.onDiffAdditionClicked.emit(textDiff);
  }

  handleToggleDrugView(): void {
    this.onDrugViewChange.emit({
      drugViewMode: this.drugViewConfig.drugViewMode === DrugViewMode.labelDiff ? DrugViewMode.historicalLabelDiff : DrugViewMode.labelDiff,
      drugLabelSetIDs: this.drugViewConfig.drugLabelSetIDs,
      selectedDrugLabelSetID: this.drugViewConfig.selectedDrugLabelSetID,
      inViewLabelOne: this.drugViewConfig.inViewLabelOne,
      inViewLabelTwo: this.drugViewConfig.inViewLabelTwo,
      isPatentInView: this.drugViewConfig.isPatentInView,
      inViewPatent: this.drugViewConfig.inViewPatent
    });
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
