import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHeaders, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AddProgrameService   {

  url = 'http://localhost:4000/api/files/upload'
  url1 = 'http://localhost:4000/addprograme'
  urlDelete = 'http://localhost:4000/deleteprograme'
  urlAddExercises = 'http://localhost:4000/addexercises'
  result:object;
  constructor(private http: HttpClient) { }

  getResult(){
    return this.result;
  }

  pushFileToStorage(file: File): Observable<HttpEvent<{}>> {
    const formdata: FormData = new FormData();

    formdata.append('file', file);
  

    const req = new HttpRequest('POST', this.url, formdata, {
      reportProgress: true,
      responseType: 'text'
    }); 
 
    return this.http.request(req);
  }

  addPrograme(obj:any){

    console.log(obj)
    return this.http.post<any>(this.url1, obj)

  }
 
  addExercises(obj:any){
    console.log(obj);
    return this.http.post<any>(this.urlAddExercises, obj)
  }
 getPrograme(){
   return this.http.get(this.url1);
 }w

 deletePrograme(id:any){
  return this.http.delete(this.urlDelete + '/' + id)

  
 }

}
