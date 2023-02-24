import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { LoginComponent } from '../components/login/login.component'; 
import { LoginResponce } from '../interface/login-responce';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor( private httpclient:HttpClient) { }

  // getlogin(user:LoginComponent):Observable<any>{

  //   return this.httpclient.post<LoginResponce>("",user)
  // }
}
