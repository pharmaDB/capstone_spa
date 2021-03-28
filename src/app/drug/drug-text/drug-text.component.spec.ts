import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrugTextComponent } from './drug-text.component';

describe('DrugTextComponent', () => {
  let component: DrugTextComponent;
  let fixture: ComponentFixture<DrugTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrugTextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrugTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
