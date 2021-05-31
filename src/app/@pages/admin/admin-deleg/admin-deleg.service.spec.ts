import { TestBed } from '@angular/core/testing';

import { AdminDelegService } from './admin-deleg.service';

describe('DelegAdminviewService', () => {
  let service: AdminDelegService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminDelegService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
