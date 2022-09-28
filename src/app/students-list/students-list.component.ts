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
  }

}
