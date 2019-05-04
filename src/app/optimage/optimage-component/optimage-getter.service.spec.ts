import { TestBed } from '@angular/core/testing';

import { OptimageGetterService } from './optimage-getter.service';

describe('OptimageGetterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OptimageGetterService = TestBed.get(OptimageGetterService);
    expect(service).toBeTruthy();
  });
});
