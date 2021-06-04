import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { multi } from '../typeahead-template/multi';
import {of, OperatorFunction} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MultiSearch1Service {
  private statusUrl = '/api/multi';
  private url = '';

  constructor(private http: HttpClient) {

  }

  result:any;

  Lookup(term:string) {
    term = term.trim();
    console.log(term);
    if(term=='') return of([]);
    this.url = this.statusUrl + "?query=" +term;
    //up to server to return multi type
    //// now returns an Observable of multi
    return this.http.get<multi[]>(this.url);
  }



}



