import {Injectable} from '@angular/core';
import {catchError, retry, debounce, delay, map, tap, filter, mergeMap, scan, mergeAll } from 'rxjs/operators';
import {throwError, Observable, Subscription, from, of, interval, zip, forkJoin} from 'rxjs';
import {ISettings, IStorageArr, IStorageWord } from './interfaces';


@Injectable({
  providedIn: 'root'
})
export class StorageService{
  private storageWord: IStorageArr = [];
  private settings: ISettings;
  public storageWord$: Observable<IStorageArr>;
  constructor() {
    this.getAllWordFromStorage() ;
    this.storageWord$ = from(this.storageWord).pipe(
      filter(el => {
        return (el.en.trim() !== '' && el.ru.trim() !== '');
      }),
      scan((acc: any, cur) => [...acc, cur], [])
    );
  }

  public getSettings(){
    if ( this.getLocalStorage('settings') !== null){
      this.settings = this.getLocalStorage('settings');
    }else{
      this.settings = {
        language: 'en',
        countWords: 20,
        timerTime: 5
      };
      this.setSettings(this.settings);
    }
    return this.settings;
  }
  public setSettings(settings: ISettings){
    this.setLocalStorage('settings', settings);
  }
  public addWordToStorage(newWord: IStorageWord ) {
    if ( !this.searchWordFromStorage(newWord.en).length && !this.searchWordFromStorage(newWord.ru).length){
      this.storageWord.push( newWord);
      this.setLocalStorage('words', this.storageWord);
    }
  }


  public searchWordFromStorage(search: string){
    return this.storageWord.filter( (word: IStorageWord) => {
      return (word.en === search || word.ru === search);
    });
  }

  public getRandWord(){
    return this.storageWord[this.randomIntFromInterval(0, this.storageWord.length - 1)];
  }
  private randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  private getAllWordFromStorage(){
    this.storageWord = this.getLocalStorage('words');
    if (this.storageWord === null){
      this.storageWord = [];
    }
  }

  private setLocalStorage(key: string, data: any): void {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (e) {
      console.error('Error saving to localStorage', e);
    }
  }

  private getLocalStorage(key: string) {
    try {
      return JSON.parse(localStorage.getItem(key));
    } catch (e) {
      console.error('Error getting data from localStorage', e);
      return {};
    }
  }


  public getStorageWordOb(): Observable<IStorageArr>{
   return from(this.storageWord).pipe(
      filter(el => {
        return (el.en.trim() !== '' && el.ru.trim() !== '');
      }),
      scan((acc: any, cur) => [...acc, cur], [])
    );
  }

}
