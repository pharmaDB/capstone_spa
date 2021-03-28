import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrugTimelineComponent } from './drug-timeline.component';

describe('DrugTimelineComponent', () => {
  let component: DrugTimelineComponent;
  let fixture: ComponentFixture<DrugTimelineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrugTimelineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrugTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
