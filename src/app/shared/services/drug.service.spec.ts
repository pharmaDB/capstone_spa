import { TestBed } from '@angular/core/testing';

import { DrugService } from './drug.service';

describe('DrugServiceService', () => {
  let service: DrugService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DrugService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
