import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateStudentComponent } from './create-student/create-student.component';
import { StudentsListComponent } from './students-list/students-list.component';
import { UpdateStudentComponent } from './update-student/update-student.component';

const routes: Routes = [
  {path: 'students', component: StudentsListComponent},
  {path: 'add-student', component:CreateStudentComponent},
  {path: 'update-student/:studentId', component:UpdateStudentComponent},
  {path: '', redirectTo: 'students', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
