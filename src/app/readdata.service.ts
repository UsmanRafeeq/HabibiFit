import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AddProgrameService } from './add-programe.service';

@Injectable({
  providedIn: 'root'
})
export class ReaddataService implements Resolve<any> {


  url1 = 'http://localhost:4000/addprograme'
  constructor(private http: HttpClient){}

  userobj ={
    userId: 1,
    name: "Usman"
  }
  
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any{

    return this.http.get(this.url1);
  
  
  }

}
