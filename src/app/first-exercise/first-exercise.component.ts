import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-exercise',
  templateUrl: './first-exercise.component.html',
  styleUrls: ['./first-exercise.component.css']
})
export class FirstExerciseComponent  {

  imageUrlHomePic = '/assets/img/home.jpg';
  analyticsicon =  '/assets/img/icon.png'
  analyticsspelling= '/assets/img/analytics.png'
  habibiFitImage =  '/assets/img/habibifit.png'
  day1='/assets/img/day1.png'
  exercise1='/assets/img/exercise1.png'
  thumbnailimage='/assets/img/thumbnailimage.png'
  buttonwitharrownext='/assets/img/buttonwitharrownext.png'
  buttonwitharrowprev='/assets/img/buttonwitharrowprev.png'

  constructor() { }

}
