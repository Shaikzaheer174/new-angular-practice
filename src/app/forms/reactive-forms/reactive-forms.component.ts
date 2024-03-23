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
    userName: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
    address: new FormGroup({
      city: new FormControl(''),
      state: new FormControl(''),
      pincode: new FormControl(''),
    }),
  });

  displayValues() {
    this.registrationForm.setValue({
      userName: 'user1',
      password: 'password1',
      confirmPassword: 'password1',
      address: {
        city: 'city1',
        state: 'state1',
        pincode: 'pincode1',
      },
    });
  }

  displayFewValues() {
    this.registrationForm.patchValue({
      userName: 'user1',
      address: {
        city: 'city1',
      },
    });
  }
}
