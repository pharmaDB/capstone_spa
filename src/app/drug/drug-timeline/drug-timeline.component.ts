import {Component, ElementRef, EventEmitter, OnInit, Output} from '@angular/core';
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
  // Create a DataSet (allows two way data-binding)
  timeline: any;
  selectedTimelineItems: string[] = [];
  items = [
    {id: 1, content: 'P', start: '2007-04-20', group: 'patent', className: 'timeline-patent-identifier', title: 'tooltip'},
    {id: 2, content: 'P', start: '2010-04-14', group: 'patent', className: 'timeline-patent-identifier'},
    {id: 3, content: 'L', start: '2013-04-18', group: 'label', className: 'timeline-label-identifier'},
    {id: 4, content: 'L', start: '2015-04-16', group: 'label', className: 'timeline-label-identifier'},
    {id: 5, content: 'L', start: '2016-04-25', group: 'label', className: 'timeline-label-identifier'},
    {id: 6, content: 'P', start: '2020-04-27', group: 'patent', className: 'timeline-patent-identifier'}
  ];

  constructor(
    private element: ElementRef
  ) { }

  onItemSelectionHandler(itemId: string): void {
    if (this.selectedTimelineItems.length >= 2) {
      this.selectedTimelineItems = [];
    }

    // dont let the user select two patents
    if (this.selectedTimelineItems.length === 1) {
      const itemToBeAdded = _.find(this.items, (item: any) => {
        return item.id === itemId;
      });

      const currentlySelectedItem = _.find(this.items, (item: any) => {
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
      itemsSelected.push(_.find(this.items, (item: any) => {
        return item.id === itemId;
      }));
    });

    // if only one item is selected
    if (itemsSelected.length === 1) {

      // and that item is a patent then go to the single patent text view mode
      if (itemsSelected[0].group === 'patent') {
        nextPatentIdentifier = itemsSelected[0].id;
        nextDrugViewMode = DrugViewMode.patent;
      }

      // or is that item is a label go to the single label text view mode
      if (itemsSelected[0].group === 'label') {
        nextLabelOneIdentifier = itemsSelected[0].id;
        nextDrugViewMode = DrugViewMode.label;
      }
    }

    // if two items are selected
    if (itemsSelected.length === 2) {

      // and the both are labels go to the two label diffing view
      if (itemsSelected[0].group === 'label' && itemsSelected[1].group === 'label') {
        nextLabelOneIdentifier = itemsSelected[0].id;
        nextLabelTwoIdentifier = itemsSelected[1].id;
        nextDrugViewMode = DrugViewMode.label_label;
      }

      // or if one is a label and the other a patent go to the label patent analysis view mode
      if (itemsSelected[0].group === 'label' && itemsSelected[1].group === 'patent') {
        nextLabelOneIdentifier = itemsSelected[0].id;
        nextPatentIdentifier = itemsSelected[1].id;
        nextDrugViewMode = DrugViewMode.label_patent;
      }

      // same as above if statement just accounting for different selection order
      if (itemsSelected[0].group === 'patent' && itemsSelected[1].group === 'label') {
        nextLabelOneIdentifier = itemsSelected[1].id;
        nextPatentIdentifier = itemsSelected[0].id;
        nextDrugViewMode = DrugViewMode.label_patent;
      }
    }

    this.onDrugViewChange.emit({
      drugViewMode: nextDrugViewMode,
      labelOneIdentifier: nextLabelOneIdentifier,
      labelTwoIdentifier: nextLabelTwoIdentifier,
      patentIdentifier: nextPatentIdentifier
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
    this.timeline = new vis.Timeline(this.element.nativeElement, new vis.DataSet(this.items), options);

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
