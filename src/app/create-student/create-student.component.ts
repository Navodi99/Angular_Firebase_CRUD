import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { group } from '@angular/animations';
import { Router } from '@angular/router';
import { FormBuilder,FormGroup } from '@angular/forms';


@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.scss']
})
export class CreateStudentComponent implements OnInit{
  public studentForm:FormGroup;

  constructor(
    public StudentService: StudentService,
    public formBuilder:FormBuilder,
    public router:Router
  ){
    this.studentForm=this.formBuilder.group({
      name:[''],
      email:[''],
      student_course:[''],
      fees:['']
    })
   }
  ngOnInit(): void {
    
  }
  onSubmit(){
    this.StudentService.createStudent(this.studentForm.value);
    this.router.navigate(['list-student']);
  }
  }


