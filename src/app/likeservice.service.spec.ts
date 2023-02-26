import { TestBed } from '@angular/core/testing';

import { LikeserviceService } from './likeservice.service';

describe('LikeserviceService', () => {
  let service: LikeserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LikeserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
