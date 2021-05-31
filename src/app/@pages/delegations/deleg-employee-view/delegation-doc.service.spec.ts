import { TestBed } from '@angular/core/testing';

import { DelegationDocService } from './delegation-doc.service';

describe('DelegationDocService', () => {
  let service: DelegationDocService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DelegationDocService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
