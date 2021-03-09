import { NgModule, Component, APP_INITIALIZER, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { FirstExerciseComponent } from './first-exercise/first-exercise.component';
import { HomeComponent } from './home/home.component';
import { ProgramesComponent } from './programes/programes.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddProgrameComponent } from './add-programe/add-programe.component';
import { DetailsUploadComponent } from './upload/details-upload/details-upload.component';
import { FormUploadComponent } from './upload/form-upload/form-upload.component';
import { ListUploadComponent } from './upload/list-upload/list-upload.component';
import { UploadFileService } from './upload-file.service';
import { TotalExercisesComponent } from './total-exercises/total-exercises.component';
import { AddProgrameService } from './add-programe.service';
import { ReaddataService } from './readdata.service';
import { ExercisesComponent } from './exercises/exercises.component';
import { ExercisesViewsComponent } from './exercises-views/exercises-views.component';




@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    FirstExerciseComponent,
    HomeComponent,
    ProgramesComponent,
    AddProgrameComponent,
    DetailsUploadComponent,
    FormUploadComponent,
    ListUploadComponent,
    TotalExercisesComponent,
    ExercisesComponent,
    ExercisesViewsComponent
  ],
  imports: [
  BrowserModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '', component: AdminComponent},
      {path: 'home', component: HomeComponent, resolve:{data: ReaddataService} },
      {path: 'add-programe', component: AddProgrameComponent},
      {path: 'total-exercises', component: TotalExercisesComponent},
      {path: 'exercises', component: ExercisesComponent},
      {path: 'exercises-view', component: ExercisesViewsComponent},


    ])   
  ],
  providers: [ReaddataService,AddProgrameService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class AppModule { }
