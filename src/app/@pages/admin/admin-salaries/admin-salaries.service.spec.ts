import { TestBed } from '@angular/core/testing';

import { AdminSalariesService } from './admin-salaries.service';

describe('AdminSalariesService', () => {
  let service: AdminSalariesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminSalariesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
