import { TestBed } from '@angular/core/testing';

import { QnProductService } from './qn-product.service';

describe('QnProductService', () => {
  let service: QnProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QnProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
