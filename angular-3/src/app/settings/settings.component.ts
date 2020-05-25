import { Component, OnInit } from '@angular/core';
import {StorageService} from '../storage.service';
import {Observable, Subscription} from 'rxjs';
import {NgForm } from '@angular/forms';
import {ISettings, IStorageArr, IStorageWord } from '../interfaces';


@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  public settings: ISettings;
  public settings$: Subscription;
  constructor(public myStorageService: StorageService) {

  }

  ngOnInit(): void {
    this.settings = this.myStorageService.getSettings();
  }

  public onSubmit(mySettings: NgForm){
    this.settings = {
      language : mySettings.value.language,
      countWords : mySettings.value.countWords,
      timerTime : mySettings.value.timerTime
    };
    this.myStorageService.setSettings(this.settings);

  }

  onReset(mySettings: NgForm) {
    this.settings = this.myStorageService.getSettings();
  }
}
