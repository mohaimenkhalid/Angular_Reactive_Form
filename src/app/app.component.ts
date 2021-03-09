import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
