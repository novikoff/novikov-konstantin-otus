import { TestBed } from '@angular/core/testing';

import { InsertWordsService } from './insert-words.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';

describe('InsertWordsService', () => {
  let service: InsertWordsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule ],
      providers: [ HttpClient ]
    });
    service = TestBed.inject(InsertWordsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
