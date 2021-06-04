import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Carousel2Service {

  constructor(public http: HttpClient) { }

  getUrl(my_url:string){
    return this.http.get("http://localhost:8080"+my_url);
  }

}
