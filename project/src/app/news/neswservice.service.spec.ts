import { TestBed } from '@angular/core/testing';

import { NeswserviceService } from './neswservice.service';

describe('NeswserviceService', () => {
  let service: NeswserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NeswserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
