import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class GuestService {

  constructor(private _http:HttpClient) { }

  createUser(fda:any){
    return this._http.post("http://localhost/restapi/api/insertfolder", fda,{headers: new HttpHeaders({ 'Content-Type': 'application/json',
    'Accept': 'application/json' }), responseType: 'text' as 'json'});
  } 

  getallUser(){
    return this._http.get("http://localhost/restapi/api/getfolder");
  }
  deleteUser(user1:any){
    return this._http.post("http://localhost/restapi/api/deletefolder", user1,{headers: new HttpHeaders({ 'Content-Type': 'application/json',
    'Accept': 'application/json' }), responseType: 'text' as 'json'});
  }
  saveimg(user:any){
    return this._http.post("http://localhost/restapi/api/saveimages", user,{headers: new HttpHeaders({ 'Content-Type': 'application/json',
    'Accept': 'application/json' }), responseType: 'text' as 'json'});
  }

}
