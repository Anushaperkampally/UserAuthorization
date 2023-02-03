import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Register } from '../models/register.model';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  baseUrl = 'http://localhost:3000/posts';

  constructor(private http:HttpClient) { }

  

  saveregister(data : any){
    console.log(data);
    return this.http.post(this.baseUrl,data)
  }
  

}
