import { TestBed } from '@angular/core/testing';

import { TranslateService } from './translate.service';
import {HttpClient, HttpClientModule} from "@angular/common/http";

describe('TranslateService', () => {
  let service: TranslateService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule ],
      providers: [ HttpClient ]
    });
    service = TestBed.inject(TranslateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
