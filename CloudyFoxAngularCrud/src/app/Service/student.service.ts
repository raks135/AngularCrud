import { Injectable, Inject } from '@angular/core';  
import { Http, Response } from '@angular/http';  
import { Observable } from 'rxjs/Observable';  
import { Router } from '@angular/router';  
import 'rxjs/add/operator/map';  
import 'rxjs/add/operator/catch';  
import 'rxjs/add/observable/throw'; 
import { throwError } from 'rxjs';
import { filter, map, catchError } from 'rxjs/operators';
import { Student } from './student.model';
@Injectable()
export class StudentService {
  selectedStudent:Student;
  myappUrl:string='http://localhost:51941/';
   constructor(private _http: Http) {  
        
   }  

  getStudent() {  
      return this._http.get(this.myappUrl+'api/Student/StudentSel')  
        .map((response: Response) => response.json())  
         // .catch(this.errorHandler);  
  }  
  delete(id) {  
    return this._http.get(this.myappUrl+"api/Student/StudentDel/" + id)  
        .map((response: Response) => response.json())  
        //.catch(this.errorHandler);  
}  
getStudentById(id: number) {  
  return this._http.get(this.myappUrl+"api/Student/StudentGetById/" + id)  
      .map((response: Response) => response.json())  
      .catch(this.errorHandler)  
}  

saveStudent(Student) {  
  
  return this._http.post(this.myappUrl+'api/Student/StudentIns', Student)  
      .map((response: Response) => response.json())  
      .catch(this.errorHandler)  
}  

updateStudent(Student) {  
  return this._http.post( this.myappUrl+'api/Student/StudentUpd', Student)  
      .map((response: Response) => response.json())  
      .catch(this.errorHandler);  
}  

  errorHandler(error: Response) {  
    console.log(error);  
    return Observable.throw(error);  
}  
}
