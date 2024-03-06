import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { TestComponent } from './test/test.component';
import { PropertyBindingExampleComponent } from './property-binding-example/property-binding-example.component';
import { ClassBindingExampleComponent } from './class-binding-example/class-binding-example.component';
import { StyleBindingExampleComponent } from './style-binding-example/style-binding-example.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TemplateReferenceVarComponent } from './template-reference-var/template-reference-var.component';
import { TwoWayDataBindingComponent } from './two-way-data-binding/two-way-data-binding.component';
import { FormsModule } from '@angular/forms';
import { NgIfDirectiveExampleComponent } from './ng-if-directive-example/ng-if-directive-example.component';
import { NgSwitchExampleComponent } from './ng-switch-example/ng-switch-example.component';
import { NgForDirectiveExampleComponent } from './ng-for-directive-example/ng-for-directive-example.component';
import { ChildComponentComponent } from './child-component/child-component.component';
import { PipesComponent } from './pipes/pipes.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentlistServiceExComponent } from './studentlist-service-ex/studentlist-service-ex.component';
import { StudentDetailsServiceExComponent } from './student-details-service-ex/student-details-service-ex.component';
import { StudentServiceService} from './student-service.service';
import { StudentlistServiceExWithHttpComponent } from './studentlist-service-ex-with-http/studentlist-service-ex-with-http.component';
import { StudentDetailsServiceExWithHttpComponent } from './student-details-service-ex-with-http/student-details-service-ex-with-http.component';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { CourseListComponent } from './course-list/course-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { CourseFeeComponent } from './course-fee/course-fee.component';
import { CourseDurationComponent } from './course-duration/course-duration.component';
import { AdminHomePageComponent } from './admin-home-page/admin-home-page.component';
import { adminAccessGuard } from './admin-access.guard';
import { TemplateDrivenFormsEXComponent } from './forms/template-driven-forms-ex/template-driven-forms-ex.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    TestComponent,
    PropertyBindingExampleComponent,
    ClassBindingExampleComponent,
    StyleBindingExampleComponent,
    EventBindingComponent,
    TemplateReferenceVarComponent,
    TwoWayDataBindingComponent,
    NgIfDirectiveExampleComponent,
    NgSwitchExampleComponent,
    NgForDirectiveExampleComponent,
    ChildComponentComponent,
    PipesComponent,
    StudentListComponent,
    StudentDetailsComponent,
    StudentlistServiceExComponent,
    StudentDetailsServiceExComponent,
    StudentlistServiceExWithHttpComponent,
    StudentDetailsServiceExWithHttpComponent,
    EmployeeListComponent,
    CourseListComponent,
    PageNotFoundComponent,
    HomeComponent,
    CourseDetailsComponent,
    CourseFeeComponent,
    CourseDurationComponent,
    AdminHomePageComponent,
    TemplateDrivenFormsEXComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [StudentServiceService, adminAccessGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
