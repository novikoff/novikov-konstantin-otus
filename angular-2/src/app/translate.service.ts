import { Injectable } from '@angular/core';
import {HttpClient, HttpParams, HttpErrorResponse, HttpResponse} from '@angular/common/http';

import {catchError, retry, debounce, delay, map, pluck, tap} from 'rxjs/operators';
import { throwError, Observable, interval } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class TranslateService {
  private params: HttpParams;

  constructor(private http: HttpClient) {}

  get(lang, text){
    this.params = new HttpParams()
        .set('key', environment.key)
        .set('lang', lang)
        .set('text', text);
    return this.http.get(environment.yaLink, {params: this.params, responseType: 'json', observe: 'response'}).pipe(
      retry(3),
      catchError(this.handleError),
      pluck('body'),
      pluck('text'),
      map(el => {
        return el[0];
      })
    );
  }

  private handleError(ex: HttpErrorResponse){
    if ( ex.error instanceof ErrorEvent){
      console.log('client side error', ex.message);
    }
    else{
      console.log('server side error', ex.message);
    }
    return  throwError('something went wrong');
  }
}
