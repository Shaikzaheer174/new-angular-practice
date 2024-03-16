import { Component } from '@angular/core';
import { UserModel } from './../../user-model';
import { FormRegisterService } from 'src/app/form-register.service';

@Component({
  selector: 'app-template-driven-forms-ex',
  templateUrl: './template-driven-forms-ex.component.html',
  styleUrls: ['./template-driven-forms-ex.component.css'],
})
export class TemplateDrivenFormsEXComponent {
  constructor(private registerService: FormRegisterService) {}
  usermodel: UserModel = new UserModel();
  course = ['HTML', 'JS', 'CSS', 'TYPESCRIPT', 'JAVA'];
  courseHasError = true;

  submit() {
    alert('data submitted');
    console.log(this.usermodel);
  }

  validateCourse(value: string) {
    if (value === 'default') {
      this.courseHasError = true;
    } else {
      this.courseHasError = false;
    }
  }

  onSubmit() {
    // console.log(this.usermodel);
    this.registerService.enroll(this.usermodel).subscribe(
      data => console.log('Hurrah, data sent successfully....', data),
      error => console.log('oops, somwthing went wrong...', error)
    )
  }
}
