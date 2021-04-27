import {Component, ElementRef, EventEmitter, Input, OnInit, Output} from '@angular/core';
import * as _ from 'lodash';
import {DrugViewConfig} from '../drug-view-config.interface';
import {DrugViewMode} from '../drug-view-config.interface';
import {TimelinePatent, TimelineLabel} from '../drug/drug.component';

declare var vis: any;

/**
 * DrugTimeline Component
 * The DrugTimeline component is responsible for managing the timeline that's rendered in the DrugComponent view (this components parent).
 * It creates the visJS powered timeline and handles all the events from the timeline by creating DrugViewConfig objects and propagating
 * them up to the parent component (DrugComponent) where appropriate state changes are made and passed along to other child components of
 * the DrugComponent.
 */
@Component({
  selector: 'app-drug-timeline',
  templateUrl: './drug-timeline.component.html',
  styleUrls: ['./drug-timeline.component.scss']
})
export class DrugTimelineComponent implements OnInit {
  // event emitter use to notify the parent of required Drug view changes
  @Output() onDrugViewChange = new EventEmitter<DrugViewConfig>();

  @Input() timelineItems: (TimelineLabel | TimelinePatent)[];
  @Input() drugViewConfig: DrugViewConfig;
  timeline: any;
  selectedTimelineItems: (TimelineLabel | TimelinePatent)[] = [];

  constructor(
    private element: ElementRef
  ) {
  }

  /**
   * onItemSelectionHandler
   * The onItemSelectionHandler is meant to be fired as a result of events that occur in the visJS timeline library, specifically when
   * patent or label markers are clicked. It contains the logic that limits what items can be selected at the same time.
   * @param itemId String: the id of the item selected on the timeline
   */
  onItemSelectionHandler(itemId: string): void {
    // get the item that will be added, by the itemId provided as an arg
    const itemToBeAdded = _.find(this.timelineItems, (item: any) => {
      return item.id === itemId;
    });
    if (!itemToBeAdded) { return; };

    // if there are 2 or more selected items already, then clear the selection (only 2 can be selected at a time)
    if (this.selectedTimelineItems.length >= 2) {
      this.selectedTimelineItems = [];
    }

    // if there is only one selected item from the timeline then...
    if (this.selectedTimelineItems.length === 1) {

      // and get the other item that's currently selected
      const currentlySelectedItem = _.find(this.timelineItems, (item: any) => {
        return item.id === this.selectedTimelineItems[0];
      });

      // if both items are patents, then clear the selection (because two patents cant be selected at the same time)
      if (itemToBeAdded?.group === 'patent' && currentlySelectedItem?.group === 'patent') {
        this.selectedTimelineItems = []; // clear the previous patent selected
      }
    }

    // add the itemId of the selected item to the arr that contains all currently selected items
    this.selectedTimelineItems.push(itemToBeAdded);

    // set the selected items in the visJS library
    this.timeline.setSelection(this.selectedTimelineItems);

    // trigger an update to the rest of the view (this is part of what changes the in view panels based on the timeline selection)
    this.updateView();
  }

  /**
   * updateView
   * The updateView method is whats responsible for translating changes in the timeline state to changes in the drug view state. This is
   * done via config object which is used to move around a mapping that describes how the window should look and what should be visible.
   */
  updateView(): void {
    let nextDrugViewMode: DrugViewMode = DrugViewMode.none;
    let nextLabelOneIdentifier: TimelineLabel | undefined;
    let nextLabelTwoIdentifier: TimelineLabel | undefined;
    let nextPatentIdentifier: TimelinePatent | undefined;

    // if only one item is selected...
    if (this.selectedTimelineItems.length === 1) {

      // and that item is a patent then go to the single patent text view mode
      // deprecate user cannot select a patent
      // if (this.selectedTimelineItems[0].group === 'patent') {
      //   nextPatentIdentifier = this.selectedTimelineItems[0] as TimelinePatent; // set in-view item
      //   nextDrugViewMode = DrugViewMode.patent; // set viewing mode for viewing one patent
      // }

      // or if that item is a label go to the single label text view mode
      if (this.selectedTimelineItems[0].group === 'label') {
        nextLabelOneIdentifier = this.selectedTimelineItems[0] as TimelineLabel; // set in-view item
        nextDrugViewMode = DrugViewMode.labelDiff; // set viewing mode for viewing on label
      }
    }

    // if two items are selected...
    if (this.selectedTimelineItems.length === 2) {

      // and the both are labels go to the two label diffing view
      // deprecated, user cannot select 2 labels
      // if (this.selectedTimelineItems[0].group === 'label' && this.selectedTimelineItems[1].group === 'label') {
      //   nextLabelOneIdentifier = this.selectedTimelineItems[0] as TimelineLabel; // set first in-view label
      //   nextLabelTwoIdentifier = this.selectedTimelineItems[1] as TimelineLabel; // set second in-view label
      //   nextDrugViewMode = DrugViewMode.label_label; // set viewing mode for viewing 2 labels
      // }

      // or if one is a label and the other a patent go to the label patent analysis view mode
      // if (this.selectedTimelineItems[0].group === 'label' && this.selectedTimelineItems[1].group === 'patent') {
      //   nextLabelOneIdentifier = this.selectedTimelineItems[0] as TimelineLabel; // set in-view label
      //   nextPatentIdentifier = this.selectedTimelineItems[1] as TimelinePatent; // set in-view patent
      //   nextDrugViewMode = DrugViewMode.label_patent; // set viewing mode for viewing a patent v a label
      // }

      // same as above if statement just accounting for different selection order
      // if (this.selectedTimelineItems[0].group === 'patent' && this.selectedTimelineItems[1].group === 'label') {
      //   nextPatentIdentifier = this.selectedTimelineItems[0] as TimelinePatent; // set in-view patent
      //   nextLabelOneIdentifier = this.selectedTimelineItems[1] as TimelineLabel; // set in-view label
      //   nextDrugViewMode = DrugViewMode.label_patent; // set viewing mode for viewing a patent v a label
      // }
    }

    // emit an event that contains the new Drug view config object so the parent component can observe it and act accordingly
    this.onDrugViewChange.emit({
      drugViewMode: nextDrugViewMode,
      drugLabelSetIDs: this.drugViewConfig.drugLabelSetIDs,
      selectedDrugLabelSetID: this.drugViewConfig.selectedDrugLabelSetID,
      inViewLabelOne: nextLabelOneIdentifier,
      inViewLabelTwo: nextLabelTwoIdentifier,
      isPatentInView: false,
      inViewPatent: nextPatentIdentifier
    });
  }

  ngOnInit(): void {
    console.log(this.timelineItems[this.timelineItems.length - 1].start);
    // initial visJS timeline configuration object
    const options = {
      zoomable: false,
      // multiselect: true,
      // start: this.timelineItems[this.timelineItems.length - 1].start,
      horizontalScroll: false,
      moveable: false,
      // timeAxis: {
      //   scale: 'month',
      //   step: 6
      // }
    };

    // initialize the visJS timeline
    this.timeline = new vis.Timeline(this.element.nativeElement, new vis.DataSet(this.timelineItems), options);


    let previousSelectedItem = '';

    // when something is selected/clicked on the timeline...
    this.timeline.on('select', (event: any) => {

      // if it's empty space in the timeline, reset the Drug view by creating an new empty Drug view config and emitting it
      if (event.items.length === 0) {
        this.selectedTimelineItems = [];
        this.onDrugViewChange.emit({
          drugViewMode: DrugViewMode.none,
          drugLabelSetIDs: this.drugViewConfig.drugLabelSetIDs,
          selectedDrugLabelSetID: this.drugViewConfig.selectedDrugLabelSetID,
          inViewLabelOne: undefined,
          inViewLabelTwo: undefined,
          inViewPatentNumber: undefined,
          inViewPatent: undefined,
          isPatentInView: false,
        });
        return;
      }

      // BEGIN BUG FIX
      // in the event of a double event firing, we loose state for the timeline and it resets itself with the most
      // recent and incorrect event. To avoid this, if a duplicate even it detected then the item/selection in the
      // event is ignored and instead the timelines selection is 'set' again with the values already in the
      // selectedTimelineItems array (ie the items that have already been selected). This fix incorporates the
      // entire proceeding if/else statement and the var previousSelectedItem
      if (event.items[0] !== previousSelectedItem) {
        this.onItemSelectionHandler(event.items[0]);
        previousSelectedItem = event.items[0];
      } else {
        this.timeline.setSelection(this.selectedTimelineItems);
      }
      // END BUG FIX

    });
  }

}
