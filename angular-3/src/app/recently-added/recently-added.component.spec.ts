import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentlyAddedComponent } from './recently-added.component';
import {RouterTestingModule} from '@angular/router/testing';
import {StorageService} from '../storage.service';
import {InsertWordsService} from '../insert-words.service';
import {HttpClient, HttpClientModule} from "@angular/common/http";

describe('RecentlyAddedComponent', () => {
  let component: RecentlyAddedComponent;
  let fixture: ComponentFixture<RecentlyAddedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecentlyAddedComponent ],
      imports: [
        RouterTestingModule, HttpClientModule
      ],
      providers: [
        StorageService, InsertWordsService, HttpClient
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentlyAddedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
