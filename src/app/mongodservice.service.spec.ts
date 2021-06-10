import { TestBed } from '@angular/core/testing';

import { MongodserviceService } from './mongodservice.service';

describe('MongodserviceService', () => {
  let service: MongodserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MongodserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
