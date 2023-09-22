import {Component, inject} from '@angular/core';
import {
    AbstractControl,
    ControlValueAccessor,
    FormBuilder, NG_VALIDATORS,
    NG_VALUE_ACCESSOR, ValidationErrors,
    Validator,
    Validators
} from "@angular/forms";
import {debounceTime, filter, Observable, Subject} from "rxjs";
import {IComune} from "../../../features/holiday-booking-form/features/step1/interfaces/comune.interface";
import {HttpClient} from "@angular/common/http";

@Component({
    selector: 'form-address',
    templateUrl: './form-address.component.html',
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            multi: true,
            useExisting: FormAddressComponent
        },
        {
            provide: NG_VALIDATORS,
            multi: true,
            useExisting: FormAddressComponent
        }
    ]
})
export class FormAddressComponent implements ControlValueAccessor, Validator {

    onTouched: () => {};
    onValidatorChange: () => void

    form = inject(FormBuilder).group({
        nazione: ['', [Validators.required]],
        comune: ['', [Validators.required]],
        cap: ['', [Validators.required]],
        indirizzo: ['', [Validators.required]]
    })

    comuni$: Observable<IComune[]>;
    typeAheadComuni$ = new Subject<string>()

    constructor(
        private http: HttpClient
    ) {
        this.typeAheadComuni$.pipe(
            filter(e => !!e && e.length >= 3),
            debounceTime(500)
        ).subscribe(value => {
            this.comuni$ = this.getComuni(value)
        })
    }

    private getComuni(search: string): Observable<IComune[]> {
        return this.http.get<IComune[]>('/api/comuni', {
            params: {search}
        })
    }

    registerOnChange(fn: any): void {
        this.form.valueChanges.subscribe(newValue => {
          fn(newValue);

        })
    }

    registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }

    setDisabledState(isDisabled: boolean): void {
        if (isDisabled) {
            this.form.disable();
        } else {
            this.form.enable();
        }
    }

    writeValue(obj: any): void {
        if(obj){
          this.form.patchValue(obj);
        }
    }

    private initialized = false;
    validate(control: AbstractControl): ValidationErrors | null {
        if(this.initialized) {
          console.log('chiamato')
          this.initialized = true;
          return control.errors;
        }

        return this.form.valid ? null : {addressErrors: true}
    }

    registerOnValidatorChange(fn: () => void) {
        this.onValidatorChange = fn;
    }


}
