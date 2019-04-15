import { TestBed } from '@angular/core/testing';

import { PageGetterService } from './page-getter.service';

describe('PageGetterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PageGetterService = TestBed.get(PageGetterService);
    expect(service).toBeTruthy();
  });
});
