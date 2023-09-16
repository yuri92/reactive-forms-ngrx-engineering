import {AbstractControl, AsyncValidatorFn} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {catchError, map, of} from "rxjs";

export const emailExistsValidator = (http: HttpClient): AsyncValidatorFn => {
    return (control: AbstractControl) => {

        return http.post('/api/email-checker', {email: control.value}).pipe(
            map((res) => null),
            catchError(() => of({usernameAlreadyExists: true}))
        )

    }
}