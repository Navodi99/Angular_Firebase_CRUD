export class Student {
    id:string;
    name:string;
    email:string;
    student_course:string;
    fees:string;

    constructor(id:string,name:string,email:string,student_course:string,fees:string){
        this.id=id;
        this.name=name;
        this.email=email;
        this.student_course=student_course;
        this.fees=fees;
    }
    
}

