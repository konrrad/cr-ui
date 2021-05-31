import { TestBed } from '@angular/core/testing';

import { DelegAppService } from './deleg-app.service';

describe('DelegAppService', () => {
  let service: DelegAppService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DelegAppService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
