import {Injectable} from '@angular/core';
import {catchError, retry, debounce, delay, map, tap, filter, mergeMap, scan, } from 'rxjs/operators';
import {throwError, Observable, Subscription, from, of, interval, zip, forkJoin} from 'rxjs';

interface StorageWord {
  en: string;
  ru: string;
}
interface StorageArr extends Array<StorageWord>{}

@Injectable({
  providedIn: 'root'
})
export class StorageService{
  private storageWord: StorageArr = [];
  public storageWord$: Observable<StorageArr>;
  constructor() {
    this.getAllWordFromStorage() ;
    this.storageWord$ = from(this.storageWord).pipe(
      filter(el => {
        return (el.en.trim() !== '' && el.ru.trim() !== '');
      }),
      scan((acc: any, cur) => [...acc, cur], [])
    );
  }

  public addWordToStorage(newWord: StorageWord ) {
    if ( !this.searchWordFromStorage(newWord.en).length && !this.searchWordFromStorage(newWord.ru).length){
      this.storageWord.push( newWord);
      this.setLocalStorage('words', this.storageWord);
    }
  }


  public searchWordFromStorage(search: string){
    return this.storageWord.filter( (word: StorageWord) => {
      return (word.en === search || word.ru === search);
    });
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


  public getStorageWordOb(): Observable<StorageArr>{
   return from(this.storageWord).pipe(
      filter(el => {
        return (el.en.trim() !== '' && el.ru.trim() !== '');
      }),
      scan((acc: any, cur) => [...acc, cur], [])
    );
  }

}
