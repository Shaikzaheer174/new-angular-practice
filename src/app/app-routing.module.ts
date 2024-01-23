import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { CourseListComponent } from './course-list/course-list.component';

const routes: Routes = [
  {path: 'employee', component: EmployeeListComponent},
  {path: 'course', component: CourseListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
