import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class NeswserviceService {

  constructor(private _http:HttpClient) { }

  newapi="https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=28367841a82743daa1d58fcee8da9fa1";

  topheading():Observable<any>
  {
return this._http.get(this.newapi);

  }
}
