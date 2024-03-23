import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css'],
})
export class ReactiveFormsComponent {

  constructor() {}

  registrationForm = new FormGroup({
    userName : new FormControl(''),
    password : new FormControl(''),
    confirmPassword : new FormControl(''),
  });
}
