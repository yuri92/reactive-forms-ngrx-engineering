import {Component} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, NonNullableFormBuilder, Validators} from "@angular/forms";
import {createPasswordStrengthValidator} from "../../shared/validators/password.validator";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styles: []
})
export class LoginComponent {

    form = this.fb.group({
        email: ['', {
            validators: [Validators.required, Validators.email]
        }],
        password: ['', [
            Validators.required,
            Validators.minLength(8),
            createPasswordStrengthValidator()
        ]]
    })

    constructor(private fb: FormBuilder) {
    }

}
