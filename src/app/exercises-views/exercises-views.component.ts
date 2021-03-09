import { Component, Input, OnInit } from '@angular/core';
import { DataService } from './../data.service';

@Component({
  selector: 'app-exercises-views',
  templateUrl: './exercises-views.component.html',
  styleUrls: ['./exercises-views.component.css']
})
export class ExercisesViewsComponent implements OnInit {

  habibifithome = '/assets/img/habibifit_home.png';
  imageUrlHomePic = '/assets/img/home.jpg';
  analyticsicon =  '/assets/img/icon.png'
  analyticsspelling= '/assets/img/analytics.png'
  duration= '/assets/img/Duration.png'
  sets= '/assets/img/Sets.png'
  exerciseperset= '/assets/img/Exercisesperset.png'
  next = '/assets/img/buttonwitharrownext.png'
  prev = '/assets/img/buttonwitharrowprev.png'
  thumbnailimage = '/assets/img/thumbnailimage.png'
  thumbnailvideo = '/assets/img/thumbnailvideo.png'


  constructor(private dataService :DataService) { }

  ngOnInit(): void {
  }

}
