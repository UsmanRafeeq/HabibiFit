import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from '../data.service';
import { Router, RouterModule } from '@angular/router';



@Component({
  selector: 'app-total-exercises',
  templateUrl: './total-exercises.component.html',
  styleUrls: ['./total-exercises.component.css']
})
export class TotalExercisesComponent implements OnInit {

  message:number;
  subscription: Subscription;
  subscriptionDays: Subscription;
  subscriptionStartDay:Subscription;
  days:number;
  startDay:number;

  habibifithome = '/assets/img/habibifit_home.png';
  imageUrlHomePic = '/assets/img/home.jpg';
  analyticsicon =  '/assets/img/icon.png'
  analyticsspelling= '/assets/img/analytics.png'
  duration= '/assets/img/Duration.png'
  sets= '/assets/img/Sets.png'
  exerciseperset= '/assets/img/Exercisesperset.png'
  next = '/assets/img/buttonwitharrownext.png'
  prev = '/assets/img/buttonwitharrowprev.png'

  

  constructor(private dataService: DataService,private router :Router) {
    
  }    
   

  ngOnInit(): void {
    this.subscription = this.dataService.currentMessage.subscribe(message => this.message = Number(message))
    this.subscriptionDays= this.dataService.currentMessageDays.subscribe(days=>this.days=Number(days))
    this.subscriptionStartDay= this.dataService.currentMessageStartDay.subscribe(days=>this.startDay=Number(days)) 
         
  }

newMessage(msg) {
  this.dataService.changeMessage(msg);
  console.log(this.message)
  this.router.navigate(['exercises']);
}

}
