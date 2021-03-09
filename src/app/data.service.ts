import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  sharedData: number;
  sharedDays: number;
  startday:number;
  constructor() { }


  private messageSource = new BehaviorSubject('default message');
  currentMessage = this.messageSource.asObservable();


  changeMessage(msg: string) {
    this.messageSource.next(msg)
  }

  private messageSourceDays = new BehaviorSubject('1');
  currentMessageDays=this.messageSourceDays.asObservable();

  changeDays(msg: string) {
    this.messageSourceDays.next(msg)
  }


  private messageSourceStartDay = new BehaviorSubject('1');
  currentMessageStartDay=this.messageSourceStartDay.asObservable();
  
  changeStartDay(msg: string) {
    this.messageSourceStartDay.next(msg)
  }

  
}
