import { Component } from '@angular/core';
import { Student } from '../student.model';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.scss']
})
export class ListStudentComponent {
  Student:Student[] | any;

  constructor(private studentService:StudentService){}

    ngOnInit():void{
        this.studentService.getStudentList().subscribe(res =>{
            this.Student=res.map(e =>{
              return{
                id:e.payload.doc.id,
                ...e.payload.doc.data()as{}
              }as Student;
            })
        });
    
  }
  removeStudent(Student: Student){
    if(confirm("Are you sure to delete"+Student.name)){
      this.studentService.deleteStudent(Student);
    }
  }

}
