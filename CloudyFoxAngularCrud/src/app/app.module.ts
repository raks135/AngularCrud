import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { StudentComponent } from './Component/student/student.component';
import { StudentListComponent } from './Component/student-list/student-list.component';
import { StudentService } from './Service/student.service';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    StudentListComponent
    
  ],
  imports: [
    BrowserModule,
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
   
    HttpModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: StudentListComponent },  
      { path: 'app-student-list', component: StudentListComponent },  
      { path: 'app-student', component: StudentComponent },
      { path: 'student/edit/:StudentId', component: StudentComponent },
    ])
  ],
 
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
