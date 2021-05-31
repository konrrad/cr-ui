import { TestBed } from '@angular/core/testing';

import { AdminBonusesHistoryService } from './admin-bonuses-history.service';

describe('AdminBonusesHistoryService', () => {
  let service: AdminBonusesHistoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminBonusesHistoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
