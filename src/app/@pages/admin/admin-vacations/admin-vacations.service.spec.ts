import { TestBed } from '@angular/core/testing';

import { AdminVacationsService } from './admin-vacations.service';

describe('HolidayAdminviewService', () => {
  let service: AdminVacationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminVacationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
