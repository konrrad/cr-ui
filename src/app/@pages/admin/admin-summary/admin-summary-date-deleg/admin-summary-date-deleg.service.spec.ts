import { TestBed } from '@angular/core/testing';

import { AdminSummaryDateDelegService } from './admin-summary-date-deleg.service';

describe('AdminSummaryDateDelegService', () => {
  let service: AdminSummaryDateDelegService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminSummaryDateDelegService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
