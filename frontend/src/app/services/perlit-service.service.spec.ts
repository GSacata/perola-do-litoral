import { TestBed } from '@angular/core/testing';

import { PerlitServiceService } from './perlit-service.service';

describe('PerlitServiceService', () => {
  let service: PerlitServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PerlitServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
