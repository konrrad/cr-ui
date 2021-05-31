import { TestBed } from '@angular/core/testing';

import { VacationDocService } from './vacation-doc.service';

describe('VacationDocService', () => {
  let service: VacationDocService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VacationDocService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
