import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import { fdatasync } from 'node:fs';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  
  constructor(private _http:HttpClient) { }
  createUser(fda:any){
    return this._http.post("http://localhost/restapi/api/insert", fda,{headers: new HttpHeaders({ 'Content-Type': 'application/json',
    'Accept': 'application/json' }), responseType: 'text' as 'json'});
  } 

 // const localUrl = "../../server/db.json";
  getallUser(){
    return this._http.get("http://localhost/restapi/api/");
  }
  updateUser(user:any){
    return this._http.put("http://localhost/restapi/api/update/" +user.id,user)

  }
  deleteUser(user:any){
return this._http.delete("http://localhost/restapi/api/delete1?id=" +user.id)
  }
}


// export class LetterService {

//   private baseUrl = 'http://localhost:8080/api/letter';
//    private letter = new Letter();

//   constructor(private http: HttpClient) { }


//  saveThree(selectedTable: any,documents: any,empList: any): Observable<Object> {
//     return this.http.post(`${this.baseUrl}` + `/create`, selectedTable,documents,empList);
//   }

// } 