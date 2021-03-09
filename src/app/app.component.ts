import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private fb: FormBuilder) {}

  registrationForm = this.fb.group({
    username: ['mohaimen'],
    password: [''],
    confirm_password: [''],
    address: this.fb.group({
      city: [''],
      state: [''],
      postal_code: [''],
    })
  });
/*
  registrationForm = new FormGroup({
      username: new FormControl(''),
      password: new FormControl(''),
      confirm_password: new FormControl(''),
      address: new FormGroup({
          city: new FormControl(''),
          state: new FormControl(''),
          postal_code: new FormControl(''),
        })
  });
*/

  loadApiButton() {
     this.registrationForm.patchValue({
       username: 'mohaimen',
       password: 'test',
       confirm_password: 'test',
       address: {
         city: 'Dhaka',
         state: 'Dhaka',
         postal_code: '123456',
       }
     });
  }
}
