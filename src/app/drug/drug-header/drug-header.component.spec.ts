import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrugHeaderComponent } from './drug-header.component';

describe('DrugHeaderComponent', () => {
  let component: DrugHeaderComponent;
  let fixture: ComponentFixture<DrugHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrugHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrugHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
