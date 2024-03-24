import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css'],
})
export class ReactiveFormsComponent {
  constructor(private _FB: FormBuilder) {}

  // registrationForm = new FormGroup({
  //   userName: new FormControl(''),
  //   password: new FormControl(''),
  //   confirmPassword: new FormControl(''),
  //   address: new FormGroup({
  //     city: new FormControl(''),
  //     state: new FormControl(''),
  //     pincode: new FormControl(''),
  //   }),
  // });

  registrationForm = this._FB.group({
    // userName: ['', Validators.required],    //for single validation
    userName: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(8)]],
    password: [''],
    confirmPassword: [''],
    address: this._FB.group({
      city: [''],
      state: [''],
      pincode: [''],
    }),
  });

  get username() {
    return this.registrationForm.get('userName');
  }

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
