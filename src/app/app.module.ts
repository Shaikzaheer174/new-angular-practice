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
    NgSwitchExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
