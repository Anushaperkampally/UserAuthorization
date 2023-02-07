import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpclient:HttpClient) { }
  getlogin(login:string):Observable<any>
  {
    return this.httpclient.post("http://localhost:3000/superadmin",login)
  }
}
