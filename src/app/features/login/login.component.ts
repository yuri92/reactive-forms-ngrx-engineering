import {Component, inject} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, NonNullableFormBuilder, Validators} from "@angular/forms";
import {createPasswordStrengthValidator} from "../../shared/validators/password.validator";
import {emailExistsValidator} from "../../shared/validators/email-exists.async-validator";
import {HttpClient} from "@angular/common/http";
import {IPerson} from "../../shared/models/interfaces/person.interface";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styles: []
})
export class LoginComponent {

    form = inject(FormBuilder).group({
        email: ['', {
            validators: [Validators.required, Validators.email],
            asyncValidators: [emailExistsValidator(inject(HttpClient))],
            updateOn: 'blur'
        }],
        password: ['', [
            Validators.required,
            Validators.minLength(8),
            // createPasswordStrengthValidator()
        ]]
    })

    constructor(
        private http: HttpClient
    ) {
    }

    submit(): void {
        if(this.form.invalid){
            return;
        }

        this.http.post<IPerson>('/api/login', null).subscribe(console.log)
    }

}
