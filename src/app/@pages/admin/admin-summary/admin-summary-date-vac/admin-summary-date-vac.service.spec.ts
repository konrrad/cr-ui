import { TestBed } from '@angular/core/testing';

import { AdminSummaryDateVacService } from './admin-summary-date-vac.service';

describe('AdminSummaryDateVacService', () => {
  let service: AdminSummaryDateVacService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminSummaryDateVacService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
