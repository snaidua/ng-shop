import { TestBed } from '@angular/core/testing';

import { QnCartService } from './qn-cart.service';

describe('QnCartService', () => {
  let service: QnCartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QnCartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
