import {Component, ElementRef, EventEmitter, Input, OnInit, Output} from '@angular/core';
import * as _ from 'lodash';
import {DrugViewConfig} from '../drug-view-config.interface';
import {DrugViewMode} from '../drug-view-mode.enum';

declare var vis:any;

@Component({
  selector: 'app-drug-timeline',
  templateUrl: './drug-timeline.component.html',
  styleUrls: ['./drug-timeline.component.scss']
})
export class DrugTimelineComponent implements OnInit {
  @Output() onDrugViewChange = new EventEmitter<DrugViewConfig>();
  @Input() timelineItems: any;
  timeline: any;
  selectedTimelineItems: string[] = [];

  constructor(
    private element: ElementRef
  ) { }

  onItemSelectionHandler(itemId: string): void {
    if (this.selectedTimelineItems.length >= 2) {
      this.selectedTimelineItems = [];
    }

    // dont let the user select two patents
    if (this.selectedTimelineItems.length === 1) {
      const itemToBeAdded = _.find(this.timelineItems, (item: any) => {
        return item.id === itemId;
      });

      const currentlySelectedItem = _.find(this.timelineItems, (item: any) => {
        return item.id === this.selectedTimelineItems[0];
      });

      if (itemToBeAdded?.group === 'patent' && currentlySelectedItem?.group === 'patent') {
        console.log('clear');
        this.selectedTimelineItems = []; // clear the previous patent selected
      }
    }

    this.selectedTimelineItems.push(itemId);
    this.timeline.setSelection(this.selectedTimelineItems);
    this.updateView();
  }

  updateView(): void {
    let nextDrugViewMode: DrugViewMode = DrugViewMode.none;
    let nextLabelOneIdentifier: string | undefined;
    let nextLabelTwoIdentifier: string | undefined;
    let nextPatentIdentifier: string | undefined;

    const itemsSelected: any[] = [];
    this.selectedTimelineItems.forEach((itemId: string) => {
      itemsSelected.push(_.find(this.timelineItems, (item: any) => {
        return item.id === itemId;
      }));
    });

    // if only one item is selected
    if (itemsSelected.length === 1) {

      // and that item is a patent then go to the single patent text view mode
      if (itemsSelected[0].group === 'patent') {
        nextPatentIdentifier = itemsSelected[0];
        nextDrugViewMode = DrugViewMode.patent;
      }

      // or is that item is a label go to the single label text view mode
      if (itemsSelected[0].group === 'label') {
        nextLabelOneIdentifier = itemsSelected[0];
        nextDrugViewMode = DrugViewMode.label;
      }
    }

    // if two items are selected
    if (itemsSelected.length === 2) {

      // and the both are labels go to the two label diffing view
      if (itemsSelected[0].group === 'label' && itemsSelected[1].group === 'label') {
        nextLabelOneIdentifier = itemsSelected[0];
        nextLabelTwoIdentifier = itemsSelected[1];
        nextDrugViewMode = DrugViewMode.label_label;
      }

      // or if one is a label and the other a patent go to the label patent analysis view mode
      if (itemsSelected[0].group === 'label' && itemsSelected[1].group === 'patent') {
        nextLabelOneIdentifier = itemsSelected[0];
        nextPatentIdentifier = itemsSelected[1];
        nextDrugViewMode = DrugViewMode.label_patent;
      }

      // same as above if statement just accounting for different selection order
      if (itemsSelected[0].group === 'patent' && itemsSelected[1].group === 'label') {
        nextLabelOneIdentifier = itemsSelected[1];
        nextPatentIdentifier = itemsSelected[0];
        nextDrugViewMode = DrugViewMode.label_patent;
      }
    }

    this.onDrugViewChange.emit({
      drugViewMode: nextDrugViewMode,
      inViewLabelOne: nextLabelOneIdentifier,
      inViewLabelTwo: nextLabelTwoIdentifier,
      inViewPatent: nextPatentIdentifier
    });
  }

  ngOnInit(): void {

    // Configuration for the Timeline
    var options = {
      zoomable: false,
     // multiselect: true,
      horizontalScroll: false,
      moveable: false,
      timeAxis: {
        // scale: 'month'
      }
    };

    // Create a Timeline
    this.timeline = new vis.Timeline(this.element.nativeElement, new vis.DataSet(this.timelineItems), options);

    this.timeline.on('select', (event: any) => {

      // this event is also fired on empty space clicks, no item is selected and so clear all
      if (event.items.length === 0 ) {
        this.onDrugViewChange.emit({
          drugViewMode: DrugViewMode.none
        });
        return;
      }
      this.onItemSelectionHandler(event.items[0]);
    });
  }

}
