import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddStudent } from '../model/AddStudent/add-student.model';
import { StudentService } from '../service/student.service';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {

  student: AddStudent = new AddStudent();
  constructor(private studentService: StudentService, private router: Router) { }

  ngOnInit(): void {
  }

  addNewStudent(){
    this.studentService.createStudent(this.student).subscribe(data =>{
      console.log(data);
      this.returnToStudentList();
    },
    error => console.log(error)
    );
  }

  returnToStudentList(){
    this.router.navigate((['/students']))
  }
  onSubmit(){
    this.addNewStudent();
  }
}
