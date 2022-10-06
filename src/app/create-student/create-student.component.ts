import { Component, OnInit } from '@angular/core';
import { AddStudent } from '../model/AddStudent/add-student.model';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {

  student: AddStudent = new AddStudent();
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.student);
  }
}
