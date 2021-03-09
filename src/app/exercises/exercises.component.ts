import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from './../data.service';
import { ExercisesViewsComponent } from './../exercises-views/exercises-views.component';
import { Router } from '@angular/router';
import { UploadFileService } from '../upload-file.service';
import { AddProgrameService } from '../add-programe.service';
import { HttpEventType } from '@angular/common/http';
import { ViewChild } from '@angular/core';


@Component({
  selector: 'app-exercises',
  templateUrl: './exercises.component.html',
  styleUrls: ['./exercises.component.css']
})
export class ExercisesComponent implements OnInit {

  message:number;
  subscription: Subscription;
  subscriptionDays:Subscription;
  subscriptionStartDay:Subscription;
  days:number;
  array:number[];
  variable:number;
  obj={
    name: '',
    duration:'',
    filename:'',
    videoname:''
  };
  exercise:number
  display:boolean;
  day:number;
  startDay:number;
  selectedFiles: FileList;
  currentFileUpload: File;
  currentVideoUpload:File
  progress: { percentage: number } = { percentage: 0 };
  

  @ViewChild('myInput')
  myInputVariable: ElementRef;



 
  habibifithome = '/assets/img/habibifit_home.png';
  imageUrlHomePic = '/assets/img/home.jpg';
  analyticsicon =  '/assets/img/icon.png'
  analyticsspelling= '/assets/img/analytics.png'
  duration= '/assets/img/Duration.png'
  sets= '/assets/img/Sets.png'
  exerciseperset= '/assets/img/Exercisesperset.png'
  next = '/assets/img/buttonwitharrownext.png'
  prev = '/assets/img/buttonwitharrowprev.png'
  thumbnailimage='/assets/img/thumbnailimage.png'
  thumbnailvideo='/assets/img/thumbnailvideo.png'

  


  constructor(private dataService: DataService, private router :Router, 
    private uploadfileservice: UploadFileService,private addprogService: AddProgrameService) {
      
          
      this.subscription = this.dataService.currentMessage.subscribe(message => this.message = Number(message))
      this.subscriptionDays= this.dataService.currentMessageDays.subscribe(days=>this.days=Number(days))
      this.subscriptionStartDay= this.dataService.currentMessageStartDay.subscribe(days=>this.startDay=Number(days))  
      this.day=1;
      this.exercise=1;
  }

  ngOnInit(): void {
  
    this.variable=1;
  }

  
  selectFile(event) {
    this.selectedFiles = event.target.files;
    this.obj.filename=event.target.files['0'].name;
    console.log(event.target.files['0'].name);
  }
  
  selectVideo(event) {
    this.selectedFiles = event.target.files;
    this.obj.videoname=event.target.files['0'].name;
    //this.obj.videoname=event.target.files['1'].name;
    console.log(event.target.files['0'].name);
  }

  uploadFile(){
    this.currentFileUpload = this.selectedFiles.item(0);
    this.uploadfileservice.pushFileToStorage(this.currentFileUpload).subscribe(event => {
         if (event.type === HttpEventType.UploadProgress) {
          this.progress.percentage = Math.round(100 * event.loaded / event.total);
          console.log('File is completely uploaded!');
       }
      },err =>{
        console.log("there is some issue");
      });
     this.selectedFiles = undefined;
   
  }

  uploadVideo(){
    this.currentVideoUpload = this.selectedFiles.item(0);
    this.uploadfileservice.pushFileToStorage(this.currentVideoUpload).subscribe(event => {
         if (event.type === HttpEventType.UploadProgress) {
          this.progress.percentage = Math.round(100 * event.loaded / event.total);
          console.log('Video is completely uploaded!');
       }
      },err =>{
        console.log("there is some issue");
      });
      this.selectedFiles = undefined;
   
  }

  AddExercise(obj:any){
  
  this.exercise++;

  this.addprogService.addExercises(obj).subscribe(res=>{
    console.log(res);  
  })

  this.obj.name="";
  this.obj.duration="";
  this.myInputVariable.nativeElement.value = "";
  this.progress.percentage=0;
  
  if(this.exercise > this.message){
    this.exercise=1;
    
    this.dataService.changeStartDay((this.startDay+1).toString())  
    console.log(this.startDay);
    console.log(this.days)
    if(this.startDay > this.days){
      this.router.navigateByUrl('/add-programe')
      this.dataService.changeStartDay('1');
    }  
      else
      {
  this.router.navigate(['/total-exercises'])
      }

}

  }
}
