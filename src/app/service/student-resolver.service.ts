import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable} from 'rxjs';
import { Student } from '../model/student.model';
import { StudentService } from './student.service';
 

 
@Injectable({
    providedIn: 'root'
})
export class StudentResolverService implements Resolve<Student> {

  constructor(private studentService: StudentService) {}

  resolve(
        routeActivated: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<Student>|Promise<Student>|Student{
        return this.studentService.getStudentById(Number(routeActivated.paramMap.get("studentId")));
  }  


}