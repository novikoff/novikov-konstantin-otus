import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsComponent } from './settings.component';
import { RouterTestingModule } from '@angular/router/testing';
import {FormsModule, NgForm} from '@angular/forms';
import {StorageService} from "../storage.service";

describe('SettingsComponent', () => {
  let component: SettingsComponent;
  let fixture: ComponentFixture<SettingsComponent>;
  let testStorageService: StorageService;
  // beforeEach(async(() => {
  //   testStorageService = new StorageService();
  // }));

  beforeEach(async(() => {
    testStorageService = new StorageService();
    TestBed.configureTestingModule({
      declarations: [ SettingsComponent ],

      imports: [
        RouterTestingModule,
        FormsModule
      ],
      providers: [
        {provide: StorageService, useValue: testStorageService}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {

    //testStorageService = new StorageService();
    fixture = TestBed.createComponent(SettingsComponent);
    component = fixture.componentInstance;
    //component = new SettingsComponent(testStorageService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  const testForm = {
    value: {
      language : 'fr',
      countWords : 100,
      timerTime : 55
    }
  } as NgForm;
  it('should equal settings.language = fr', () => {

    // const valueServiceSpy = jasmine.createSpyObj('ValueService',['getValue']);
    // const stubValue = 'stab value';
    // valueServiceSpy.getValue.and.returnValue(stubValue);
    // masterServce = new MasterService(valueServiceSpy);
    // expect(masterService.getValue()).toBe(stubValue,'Service return tub value');
    //
    // const fakeForm = jasmine.createSpyObj('ValueService',['getValue']);
    //

    component.onSubmit(testForm);
    expect(component.settings.language).toEqual('fr');
  });

  it('should equal component.settings.countWords = 100', () => {

    component.onSubmit(testForm);
    expect(component.settings.countWords).toEqual(100);
    expect(component.settings.timerTime).toEqual(55);
  });

  it('should equal component.settings.timerTime = 55', () => {

    component.onSubmit(testForm);
    expect(component.settings.timerTime).toEqual(55);
  });
});
