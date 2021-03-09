import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { createSelf } from '@angular/compiler/src/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = 'http://localhost:4000/users/login'
  
  constructor(private http: HttpClient){}

  login(credentials:any){
    const header1= {'Content-Type':'application/json',};
    return this.http.post<any>(this.url, credentials)
  }

  logout(){

  }

  isLoggedIn(){

  }
  


}

