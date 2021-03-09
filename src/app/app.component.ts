import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  registrationForm = new FormGroup({
      username: new FormControl('Mohaimen'),
      password: new FormControl(''),
      confirm_password: new FormControl(''),
  });
}
