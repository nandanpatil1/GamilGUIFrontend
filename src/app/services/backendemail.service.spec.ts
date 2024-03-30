import { TestBed } from '@angular/core/testing';

import { BackendemailService } from './backendemail.service';

describe('BackendemailService', () => {
  let service: BackendemailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BackendemailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
