import { TestBed } from '@angular/core/testing';

import { InsertWordsService } from './insert-words.service';

describe('InsertWordsService', () => {
  let service: InsertWordsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InsertWordsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
