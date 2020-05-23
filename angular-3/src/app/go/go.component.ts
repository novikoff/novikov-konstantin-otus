import { Component, OnInit, OnDestroy  } from '@angular/core';
import {timer} from 'rxjs';
import {map, take} from 'rxjs/operators';
import {StorageService} from '../storage.service';
import {ISettings, IStorageArr, IStorageWord } from '../interfaces';

@Component({
  selector: 'app-go',
  templateUrl: './go.component.html',
  styleUrls: ['./go.component.css']
})
export class GoComponent implements OnInit, OnDestroy  {
  private settings: ISettings;
  private timer$;
  public timer: string;
  wordsTaskArr: IStorageArr = [];
  private currentTaskNumber: number;
  public currentTask: IStorageWord;
  public answerInput: string;
  public nextActive = true;
  public currentResult: {all: number, finish: number, ok: number, fail: number};
  public currentTaskModel: { equalVal: string; value: string; key: string };
  constructor(public myStorageService: StorageService) {
    this.settings = this.myStorageService.getSettings();
  }

  ngOnDestroy(){
    if (this.timer$){
      this.timer$.unsubscribe();
    }
  }

  ngOnInit(): void {
    this.timer = this.fmtMSS(this.settings.timerTime * 60);
    this.timer$ = this.initiateTimer(this.settings.timerTime).subscribe(i => {
      this.timer = this.fmtMSS(i);
      if (i === 0){
        this.timer$.unsubscribe();
        this.nextActive = false;
      }
    });
    this.generateTask();
    this.startEdu();
  }

  private initiateTimer(minutes: number) {
    const start = minutes * 60;
    return timer(1000, 1000) // timer(firstValueDelay, intervalBetweenValues)
      .pipe(
        map(i => {
          return start - i;
        }),
        take(start + 1)
      );
  }
  private fmtMSS(s: number): string{
    return (s-(s%=60))/60+(9<s?':':':0')+s;
  }

  private generateTask(){
    this.currentResult = {all: this.settings.countWords, finish: 0, ok: 0, fail: 0};
    for (let i = 0; i < this.settings.countWords; i++){
      this.wordsTaskArr.push(this.myStorageService.getRandWord());
    }
    this.currentTaskNumber = 0;
  }

  private startEdu() {
    this.currentTask = this.wordsTaskArr[this.currentTaskNumber];
    this.getCurrentTaskValue(this.currentTask);
  }
  onNext() {
    this.checkRes();
    this.currentTaskNumber++;
    if (this.wordsTaskArr[this.currentTaskNumber]){
     this.currentTask = this.wordsTaskArr[this.currentTaskNumber];
     this.getCurrentTaskValue(this.currentTask);
   }else{
      this.nextActive = false;
    }
  }
  private randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  private getCurrentTaskValue(currentTask: IStorageWord) {
    switch ( this.randomIntFromInterval(0, 1) ){
      case 0:
        this.currentTaskModel = {
          value : this.currentTask.en,
          equalVal : this.currentTask.ru,
          key : 'en'
        };
        break;
      case 1:
        this.currentTaskModel = {
          value : this.currentTask.en,
          equalVal : this.currentTask.ru,
          key : 'ru'
        };
        break;
    }
  }

  private checkRes() {
    this.currentResult.finish++;
    if (this.answerInput !== undefined && this.answerInput !== '' && this.currentTaskModel.equalVal === this.answerInput.trim()){
      this.currentResult.ok++;
    }else{
      this.currentResult.fail++;
    }
    this.answerInput = '';
  }

  public onReload() {
    this.timer$.unsubscribe();
    this.wordsTaskArr = [];
    this.currentTaskNumber = 0;
    this.timer = this.fmtMSS(this.settings.timerTime * 60);
    this.timer$ = this.initiateTimer(this.settings.timerTime).subscribe(i => {
      this.timer = this.fmtMSS(i);
      if (i === 0){
        this.timer$.unsubscribe();
        this.nextActive = false;
      }
    });
    this.generateTask();
    this.startEdu();
    this.nextActive = true;
  }
}
