import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent  {

observable: Observable<Object> | undefined;
  

  pic = '/assets/img/pic.png';
  pichabibi= '/assets/img/habibi_fitness_admin.png';
  login = '/assets/img/login.png';
  usericon='/assets/img/user_icon.png';
  passwordicon='/assets/img/password_icon.png';
  logintext='/assets/img/login_text.png';
  obj={
   name: '',
   password: ''
  } 
  
  constructor(private http: HttpClient, private router:Router,private auth: AuthService ){}

  signIn(obj:any){
  
  this.auth.login(obj).subscribe(res =>{
    if(res)  this.router.navigate(['home']);
    console.log(res)
})




}

}
