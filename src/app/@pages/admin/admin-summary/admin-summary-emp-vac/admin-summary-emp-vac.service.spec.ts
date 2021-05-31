import { TestBed } from '@angular/core/testing';

import { AdminSummaryEmpVacService } from './admin-summary-emp-vac.service';

describe('AdminSummaryEmpVacService', () => {
  let service: AdminSummaryEmpVacService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminSummaryEmpVacService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
