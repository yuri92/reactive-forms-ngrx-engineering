import {Component, inject} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {CFInitialsValidator} from "./step1.utils";
import {HttpClient, HttpEventType} from "@angular/common/http";
import {debounceTime, filter, Observable, Subject} from "rxjs";
import {IComune} from "./interfaces/comune.interface";

@Component({
    selector: 'app-step1',
    templateUrl: './step1.component.html',
    styles: []
})
export class Step1Component {


    form = inject(FormBuilder).group({
        nome: ['', [Validators.required]],
        cognome: ['', Validators.required],
        codiceFiscale: [{
            value: '',
            disabled: true
        }, [Validators.required, Validators.pattern(/[A-MZ][1-9]\d{2}|[A-M]0(?:[1-9]\d|0[1-9])/)]],
        termsAndConditions: [false, [Validators.requiredTrue]],
        documento: ['', [Validators.required]],
        indirizzoResidenza: [null]
    }, {
        validators: CFInitialsValidator()
    })

    constructor() {

        this.form.valueChanges.subscribe((form) => {
            sessionStorage.setItem('holiday-form', JSON.stringify(form))

            const {nome, cognome} = form;

            const codiceFiscaleControl = this.form.controls.codiceFiscale;

            if (nome && cognome) {
                codiceFiscaleControl.enable({emitEvent: false});
            } else {
                codiceFiscaleControl.disable({emitEvent: false});
                codiceFiscaleControl.setValue(null, {emitEvent: false});
            }
        })

        // const sessionStorageForm = sessionStorage.getItem('holiday-form');
        // if(sessionStorageForm){
        //     // this.form.value(JSON.parse(sessionStorageForm));
        //     this.form.patchValue(JSON.parse(sessionStorageForm));
        // }

    }

    submit(): void {
        if (this.form.invalid) {
            this.form.markAllAsTouched();
            return;
        }

        console.log(this.form.value)
    }


}
