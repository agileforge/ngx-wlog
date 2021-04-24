import { TestBed } from '@angular/core/testing';

import { NgxWlogService } from './ngx-wlog.service';

describe('NgxWlogService', () => {
  let service: NgxWlogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxWlogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
