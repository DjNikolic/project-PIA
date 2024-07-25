import { TestBed } from '@angular/core/testing';

import { StolService } from './stol.service';

describe('StolService', () => {
  let service: StolService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StolService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
