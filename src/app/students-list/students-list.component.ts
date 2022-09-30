import { Component, OnInit } from '@angular/core';
import { Student } from '../model/student.model';


@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent implements OnInit {

  students: Student[] | undefined;
  constructor() { }

  ngOnInit(): void {
    this.students = [{
      "studentId":1,
      "firstName": "Bob",
      "lastName": "Ross",
      "dateOfBirth": "25/06/1999"
    },
    {
      "studentId":2,
      "firstName": "Paul",
      "lastName": "Karl",
      "dateOfBirth": "18/07/1997"
    }
  ];
  }

}
