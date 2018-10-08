import { Component, Inject } from '@angular/core';  
import { Http, Headers } from '@angular/http';  
import { Router, ActivatedRoute } from '@angular/router';  
import {StudentService} from '../../Service/student.service';
import {Student}from'../../Service/student.model';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent   {

  public studentList: Student[];  
  constructor(public http: Http, private _router: Router, private _studentService: StudentService) {  
    this.getStudent();  
}  

getStudent() {  
    this._studentService.getStudent().subscribe(  
        data => this.studentList = data  
    )  
}  

delete(StudentId) {  
  var ans = confirm("Do you want to delete customer with Id: " + StudentId);  
  if (ans) {  
      this._studentService.delete(StudentId).subscribe((data) => {  
          this.getStudent();  
      }, error => console.error(error))   
  }  
}  
}
