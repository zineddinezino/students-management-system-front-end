import { Component, OnInit } from '@angular/core';
import { Student } from '../model/student.model';
import { StudentService } from '../service/student.service';


@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent implements OnInit {

  students: Student[] | undefined;
  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.getStudentsList();
  }

  private getStudentsList() {
    this.studentService.getStudentsList().subscribe(data => {
      this.students = data;
    });
  }

}
