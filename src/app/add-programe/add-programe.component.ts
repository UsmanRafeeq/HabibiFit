import { HttpClient, HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AddProgrameService } from '../add-programe.service';
import { DataService } from '../data.service';
import { UploadFileService } from './../upload-file.service';

@Component({
  selector: 'app-add-programe',
  templateUrl: './add-programe.component.html',
  styleUrls: ['./add-programe.component.css']
})
export class AddProgrameComponent implements OnInit {

  habibifithome = '/assets/img/habibifit_home.png';
  imageUrlHomePic = '/assets/img/home.jpg';
  analyticsicon =  '/assets/img/icon.png'
  analyticsspelling= '/assets/img/analytics.png'
 
  imageHeader = "Header Image"
  nextbuttonimage = '/assets/img/buttonwitharrownext.png'
   addProgrameObj = {
    name: '',
    days: '',
    type:'',
    desc:'',
    filename: ''
  };
  days:number;
  startDay:number;
  message:number;
  subscription: Subscription;
  subscriptionDays: Subscription;
  subscriptionStartDay:Subscription;

  programeTypes=["Fat Burn","weightLoss","Weight Gain","Muscles Build"];


  selectedFiles: FileList;
  currentFileUpload: File;
  selectedFileName: string;
  progress: { percentage: number } = { percentage: 0 };

  constructor(private uploadfileservice: UploadFileService, 
    private router:Router,private addprogService: AddProgrameService,private dataService:DataService ){
    
    
    
    
      
    }



  ngOnInit(): void {
    this.subscription = this.dataService.currentMessage.subscribe(message => this.message = Number(message))
    this.subscriptionDays= this.dataService.currentMessageDays.subscribe(days=>this.days=Number(days))
    this.subscriptionStartDay= this.dataService.currentMessageDays.subscribe(days=>this.startDay=Number(days))  

    console.log(this.startDay);
  }

  selectFile(event) {
    this.selectedFiles = event.target.files;
    this.addProgrameObj.filename=event.target.files['0'].name;
    console.log(event.target.files['0'].name);
  }
  upload(){
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

  savePrograme(obj:any){

    var day= this.addProgrameObj.days;
    this.dataService.changeDays(day)
    console.log(this.days) 

    this.addprogService.addPrograme(obj).subscribe(res=>{
      this.router.navigate(['/total-exercises'])
    });
   
    

  }


}
