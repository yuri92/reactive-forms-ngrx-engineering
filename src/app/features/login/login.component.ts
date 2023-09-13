import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {createPasswordStrengthValidator} from "../../shared/validators/password.validator";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent {

  form = new FormGroup({
    email: new FormControl('', {
      validators: [Validators.required, Validators.email]
    }),
    password: new FormControl('', {
      validators: [Validators.required, createPasswordStrengthValidator()]
    })
  })

}
