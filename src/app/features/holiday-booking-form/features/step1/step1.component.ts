import {Component, inject} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {CFInitialsValidator, getCFNomeCognome} from "./step1.utils";
import {debounceTime, distinctUntilChanged} from "rxjs";

@Component({
    selector: 'app-step1',
    templateUrl: './step1.component.html',
    styles: []
})
export class Step1Component {

    form = inject(FormBuilder).group({
        nome: ['', [Validators.required]],
        cognome: ['', Validators.required],
        codiceFiscale: [{value: '', disabled: true}, [Validators.required, Validators.pattern(/[A-MZ][1-9]\d{2}|[A-M]0(?:[1-9]\d|0[1-9])/)]]
    }, {
        validators: CFInitialsValidator()
    })

    constructor() {

        this.form.valueChanges.subscribe((form) => {
            const {nome, cognome} = form;

            const codiceFiscaleControl = this.form.controls.codiceFiscale;

            if (nome && cognome) {
                codiceFiscaleControl.enable({emitEvent: false});
            } else {
                codiceFiscaleControl.disable({emitEvent: false});
                codiceFiscaleControl.setValue(null, {emitEvent: false});
            }
        })

    }


}
