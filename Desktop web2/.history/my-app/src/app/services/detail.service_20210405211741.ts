import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DetailService {
  private url = '/api/detail';
  constructor(public http: HttpClient) { }

  getDetails(type:String, id:number){
    console.log(id);
    this.url = "http://localhost:8080"+ '/api/detail' + "?type=" + type +"&id=" + id.toString();
    console.log(this.url);
    return this.http.get(this.url);
  }

  getDetails2(type:String, id:number){
    console.log(id);
    this.url = "http://localhost:8080"+'/api/detail2' + "?type=" + type +"&id=" + id.toString();
    console.log(this.url);
    return this.http.get(this.url);

  }

  getDetails3(type:String, id:number){
    //"/api/credits"
    this.url = "http://localhost:8080"+'/api/credits' + "?type=" + type +"&id=" + id.toString();
    console.log(this.url);
    return this.http.get(this.url);
  }

  getPerson(id:number){
    //"/api/credits"
    this.url = "http://localhost:8080"+'/api/person' + "?id=" + id.toString();
    console.log(this.url);
    return this.http.get(this.url);
  }

  getExternal(id:number){
    this.url = "http://localhost:8080"+'/api/external' + "?id=" + id.toString();
    console.log(this.url);
    return this.http.get(this.url);
  }

  getReview(type:String, id:number){
    this.url = "http://localhost:8080"+"/api/review" + "?type=" + type +"&id=" + id.toString();
    console.log(this.url);
    return this.http.get(this.url);
  }

  getRecommend_Or_Similar(type:String, id:number, type2:string){
    if(type2=="Recommended Movies"||type2=="Recommended TV Shows"){
    this.url ="http://localhost:8080"+ "/api/recommend" + "?type=" + type +"&id=" + id.toString();
    return this.http.get(this.url);
    }
    else{
      this.url ="http://localhost:8080"+ "/api/similar" + "?type=" + type +"&id=" + id.toString();
    return this.http.get(this.url);
    }
  }





}
