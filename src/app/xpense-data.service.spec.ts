import { TestBed } from '@angular/core/testing';

import { XpenseDataService } from './xpense-data.service';

describe('XpenseDataService', () => {
  let service: XpenseDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(XpenseDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
