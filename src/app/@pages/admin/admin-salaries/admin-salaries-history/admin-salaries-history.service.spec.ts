import { TestBed } from '@angular/core/testing';

import { AdminSalariesHistoryService } from './admin-salaries-history.service';

describe('AdminSalariesHistoryService', () => {
  let service: AdminSalariesHistoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminSalariesHistoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
