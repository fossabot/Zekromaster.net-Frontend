import { TestBed } from '@angular/core/testing';

import { MarkdownConverterService } from './markdown-converter.service';

describe('MarkdownConverterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MarkdownConverterService = TestBed.get(MarkdownConverterService);
    expect(service).toBeTruthy();
  });
});
