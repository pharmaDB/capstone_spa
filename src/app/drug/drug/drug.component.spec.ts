import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrugComponent } from './drug.component';

describe('ViewComponent', () => {
  let component: DrugComponent;
  let fixture: ComponentFixture<DrugComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrugComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrugComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
