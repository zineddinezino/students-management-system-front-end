import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Student } from '../model/student.model';
import { AddStudent } from '../model/AddStudent/add-student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private baseURL = "http://localhost:8080/api/students";

  constructor(private httpClient: HttpClient) { }

  getStudentsList(): Observable<Student[]>{
    return this.httpClient.get<Student[]>(`${this.baseURL}`);
  }

  createStudent(student : AddStudent): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, student);
  }
}
