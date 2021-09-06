import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogapiService {
  constructor(private http:HttpClient) { }
  url="http://localhost:3000/";

  login(apiUrl,data){
    return this.http.post(this.url+apiUrl,data);
  }
  get(apiUrl){
    let token=localStorage.getItem('token');
    let headers=new HttpHeaders({'token':token});
    return this.http.get(this.url+apiUrl,{headers:headers});
  }
  post(apiUrl,data){
    var token=localStorage.getItem('token');
    let headers=new HttpHeaders({'token':token});

    return this.http.post(this.url+apiUrl,data,{headers:headers});
  }
 
}
