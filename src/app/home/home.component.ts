import { Component, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router, RouteReuseStrategy } from '@angular/router';
import { rejects } from 'assert';
import { AddProgrameService } from '../add-programe.service';
import { Observable, Subscriber, Subscription } from 'rxjs';
import { ReaddataService } from './../readdata.service';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnChanges {
  programeList$:Observable<any>;
  programeLength: any[];
  subcription:Subscription;

  habibifithome = '/assets/img/habibifit_home.png';
  imageUrlHomePic = '/assets/img/home.jpg';
  analyticsicon = '/assets/img/icon.png';
  analyticsspelling = '/assets/img/analytics.png';
  addprograme = '/assets/img/Vector.png';
  view = '/assets/img/view.png';
  edit = '/assets/img/edit.png';
  delete = '/assets/img/delete.png';

  constructor(
    private router: ActivatedRoute,
    private route: Router,
    private progService: AddProgrameService
  ) {

    console.log('Usman');

    

    //this.router.data.subscribe((data) => (this.programeLength = data['data']));

    //console.log(this.programeLength.length);

  }

  ngOnInit(): void {

    this.router.data.subscribe((response)=>{
    this.programeLength = response.data;
  
    console.log(this.programeLength)
 })
    
  }

  ngOnChanges(id:any) {
    console.log('Hassan');
    
    return this.programeLength;

}

  navigate() {
    this.route.navigate(['/add-programe']);
  }

  deletee(id: any) {

    this.progService.deletePrograme(id)
    
    .subscribe((response) =>{
      console.log(id);
      this.programeLength.splice(id+1,1);

      console.log(response);
   })
  }



}
