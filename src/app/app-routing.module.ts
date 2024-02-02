import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { CourseListComponent } from './course-list/course-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { CourseDurationComponent } from './course-duration/course-duration.component';
import { CourseFeeComponent } from './course-fee/course-fee.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'employee', component: EmployeeListComponent},
  {path: 'course', component: CourseListComponent},
  {path: 'course/:id', 
  component: CourseDetailsComponent,
   children: [{path: 'fee', component: CourseFeeComponent},
              {path: 'duration', component: CourseDurationComponent}]},
              
  // {path: 'course-list', component: CourseListComponent},  //relative navigation
  // {path: 'course-list/:id', component: CourseDetailsComponent},   //relative navigation
  {path: 'home', component: HomeComponent},
  { path: 'faculty', loadChildren: () => import('./faculty/faculty.module').then(m => m.FacultyModule) },
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
