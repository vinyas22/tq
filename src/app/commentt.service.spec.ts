import { TestBed } from '@angular/core/testing';

import { CommenttService } from './commentt.service';

describe('CommenttService', () => {
  let service: CommenttService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommenttService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
