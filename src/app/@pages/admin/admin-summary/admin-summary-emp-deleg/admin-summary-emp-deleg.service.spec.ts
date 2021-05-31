import { TestBed } from '@angular/core/testing';

import { AdminSummaryEmpDelegService } from './admin-summary-emp-deleg.service';

describe('AdminSummaryEmpDelegService', () => {
  let service: AdminSummaryEmpDelegService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminSummaryEmpDelegService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
