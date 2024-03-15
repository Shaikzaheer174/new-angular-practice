import { Component } from '@angular/core';
import { UserModel } from './../../user-model';

@Component({
  selector: 'app-template-driven-forms-ex',
  templateUrl: './template-driven-forms-ex.component.html',
  styleUrls: ['./template-driven-forms-ex.component.css']
})
export class TemplateDrivenFormsEXComponent {
  usermodel: UserModel = new UserModel();

  submit() {
    alert('data submitted');
    console.log(this.usermodel);
  }
}
