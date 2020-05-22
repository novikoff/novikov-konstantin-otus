import { Injectable } from '@angular/core';
import {StorageService} from './storage.service';
import {forkJoin, from, Observable, of, zip} from 'rxjs';
import {delay, map, mergeAll, mergeMap, switchAll, tap, } from 'rxjs/operators';
import {TranslateService} from './translate.service';


interface StorageWord {
  en: string;
  ru: string;
}
interface StorageArr extends Array<StorageWord>{}


@Injectable({
  providedIn: 'root'
})
export class InsertWordsService {
  private YAqueryArr$: Observable<any>[];

  constructor(public myStorageService: StorageService, private appTranslateService: TranslateService) { }

  public insertWord(text: string) {
    this.YAqueryArr$ = text.split(' ').filter(ruWord => ruWord.trim() !== '').map(ruWord =>
    {
      return this.appTranslateService.get('en', ruWord).pipe(
        tap(enWord => {
            this.myStorageService.addWordToStorage({en: enWord, ru: ruWord});
          }
        )
      );
    });

    return forkJoin(...this.YAqueryArr$).pipe(
      map(e => {
        return e;
      }),
    );
  }
}
