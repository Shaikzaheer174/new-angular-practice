import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { TestComponent } from './test/test.component';
import { PropertyBindingExampleComponent } from './property-binding-example/property-binding-example.component';
import { ClassBindingExampleComponent } from './class-binding-example/class-binding-example.component';
import { StyleBindingExampleComponent } from './style-binding-example/style-binding-example.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    TestComponent,
    PropertyBindingExampleComponent,
    ClassBindingExampleComponent,
    StyleBindingExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
