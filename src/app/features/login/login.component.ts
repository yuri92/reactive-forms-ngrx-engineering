import {Component, inject} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, NonNullableFormBuilder, Validators} from "@angular/forms";
import {createPasswordStrengthValidator} from "../../shared/validators/password.validator";
import {emailExistsValidator} from "../../shared/validators/email-exists.async-validator";
import {HttpClient} from "@angular/common/http";
import {IUser} from "../../shared/models/interfaces/person.interface";
import {Store} from "@ngrx/store";
import {CoreState} from "../../core/store/core.reducer";
import * as CoreActions from "../../core/store/core.actions";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styles: []
})
export class LoginComponent {

    form = inject(FormBuilder).group({
        email: ['yuri@test.it', {
            validators: [Validators.required, Validators.email],
            asyncValidators: [emailExistsValidator(inject(HttpClient))]
        }],
        password: ['321654987654', [
            Validators.required,
            Validators.minLength(8),
            // createPasswordStrengthValidator()
        ]]
    })

    constructor(
        private http: HttpClient,
        private store: Store<CoreState>
    ) {
    }

    submit(): void {
        if(this.form.invalid){
            return;
        }

        const {email, password} = this.form.value;
        this.store.dispatch(CoreActions.login({email, password}))
    }

}
