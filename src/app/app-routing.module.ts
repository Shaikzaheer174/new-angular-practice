import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { CourseListComponent } from './course-list/course-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { CourseDurationComponent } from './course-duration/course-duration.component';
import { CourseFeeComponent } from './course-fee/course-fee.component';
import { AdminHomePageComponent } from './admin-home-page/admin-home-page.component';
import { adminAccessGuard } from './admin-access.guard';
import { TemplateDrivenFormsEXComponent } from './forms/template-driven-forms-ex/template-driven-forms-ex.component';
import { ReactiveFormsComponent } from './forms/reactive-forms/reactive-forms.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'tdf', component: TemplateDrivenFormsEXComponent},
  {path: 'rf', component: ReactiveFormsComponent},
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
  {path: 'admin', component: AdminHomePageComponent, canActivate : [adminAccessGuard]},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
