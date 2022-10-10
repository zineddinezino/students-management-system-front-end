import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../model/student.model';
import { StudentService } from '../service/student.service';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {
  student: Student = new Student();
  studentId: number | undefined;
  constructor(private activatedRoute: ActivatedRoute, 
              private studentService: StudentService,
              private router: Router) { }

  ngOnInit(): void {
    this.studentId = this.activatedRoute.snapshot.params['studentId'];
    this.studentService.getStudentById(this.studentId).subscribe(data =>{
      this.student = data;
    },
    error => console.log(error));
  }

  onSubmit(){
    this.studentService.updateStudent(this.student).subscribe(data =>{
      this.returnToStudentList();
    },
    error => console.log(error)
    );
  }

  returnToStudentList(){
    this.router.navigate(['/students']);
  }
}
