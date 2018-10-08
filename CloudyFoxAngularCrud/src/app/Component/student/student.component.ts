
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {StudentService} from '../../Service/student.service';


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit  {
    studentForm: FormGroup;  
    title: string = "Create";  
    StudentId: number;  
    errorMessage: any;  
   
 constructor(private _fb: FormBuilder, private _avRoute: ActivatedRoute,  
        private _studentService: StudentService, private _router: Router) {  
        if (this._avRoute.snapshot.params["StudentId"]) {  
            this.StudentId = this._avRoute.snapshot.params["StudentId"];  
        }  
        this.studentForm = this._fb.group({  
          StudentId: 0,  
          firstname: ['', [Validators.required]],  
          lastname: ['', [Validators.required]],  
          faculty: ['', [Validators.required]],  
          email: ['', [Validators.required]]  ,
          phone: ['', [Validators.required]]  ,

      })  
      
      }
      ngOnInit() {  
        if (this.StudentId > 0) {  
            this.title = "Edit";  
            this._studentService.getStudentById(this.StudentId)  
                .subscribe(resp =>              
                   this.studentForm.patchValue({
                    StudentId: resp[0].StudentId,
                    firstname: resp[0].FirstName,
                    lastname:resp[0].LastName,
                    faculty: resp[0].Faculty,
                    phone: resp[0].Phone,
                    email: resp[0].Email
                  
                },)
                // this.studentForm.setValue(resp)
                , error => this.errorMessage = error);  
               
        }  
    }
    save() {  
  
        if (!this.studentForm.valid) {  
            
            return;  
        }  
  
        if (this.title == "Create") {  
            this._studentService.saveStudent(this.studentForm.value)  
                .subscribe((data) => {  
              
                    this._router.navigate(['/app-student-list']);  
                }, error => this.errorMessage = error)  
               
        }  
        else if (this.title == "Edit") { 
          
            this._studentService.updateStudent(this.studentForm.value)  
                .subscribe((data) => {  
                    this._router.navigate(['/app-student-list']);  
                    
                }, error => this.errorMessage = error)   
                console.log(this.studentForm.value)
        }  
    }  
  
    cancel() {  
        this._router.navigate(['/app-student-list']);  
    }  
  
    get firstname() { return this.studentForm.get('firstname'); }  
    get lastname() { return this.studentForm.get('lastname'); }  
    get faculty() { return this.studentForm.get('faculty'); }  
    get phone() { return this.studentForm.get('phone'); }  
    get email() { return this.studentForm.get('email'); }  
   
   
}
