import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IContactsList } from '../../Models/contactsList.interface'
import { Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url:string = "http://localhost/apiAgenda/index.php";

  constructor(private http:HttpClient) { }

  getAllContacts():Observable<IContactsList[]>{

    let direction = this.url + "/contacts/";
    return this.http.get<IContactsList[]>(direction);
  }

  getSingleContact(id:number):Observable<IContactsList>{
    let direction = this.url + "/contacts/" + id;
    return this.http.get<IContactsList>(direction);

  }

  putContact(form:any):Observable<any>{
    let direction = this.url + "/contacts/" + form.id;
    console.log(form);
    return this.http.put<any>(direction,form);
  }

  deleteContact(form:any):Observable<any>{
    let direction = this.url + "/contacts/" + form.id;
    let options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: form
    }
    return this.http.delete<any>(direction,options);
  }

  postContact(form:any):Observable<any>{
    let direction = this.url;
    return this.http.post<any>(direction,form);

  }

}
