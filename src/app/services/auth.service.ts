import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpclient:HttpClient) { }

  isAuthenticate: boolean = false;
  login(email: string, password: string): Observable<boolean> {
    if (email === 'superadmin@mail.com' || 'admin@mail.com'  && password === '12345@Aa') {
      this.isAuthenticate = true;
      return of(true);
    }
    return of(false);
    
  }
}
