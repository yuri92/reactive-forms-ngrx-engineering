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

    comuni$ : Observable<IComune[]>;
    typeAheadComuni$ = new Subject<string>()

    form = inject(FormBuilder).group({
        test: ['ciao'],
        nome: ['', [Validators.required]],
        cognome: ['', Validators.required],
        codiceFiscale: [{value: '', disabled: true}, [Validators.required, Validators.pattern(/[A-MZ][1-9]\d{2}|[A-M]0(?:[1-9]\d|0[1-9])/)]],
        termsAndConditions: [false, [Validators.requiredTrue]],
        documento: ['', [Validators.required]],
        comuneNascita: ['', [Validators.required]]
    }, {
        validators: CFInitialsValidator()
    })

    constructor(
        private http: HttpClient
    ) {
        this.typeAheadComuni$.pipe(
            filter(e => !!e && e.length >= 3),
            debounceTime(500)
        ).subscribe(value => {
            this.comuni$ = this.getComuni(value)
        })

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

        const sessionStorageForm = sessionStorage.getItem('holiday-form');
        if(sessionStorageForm){
            // this.form.value(JSON.parse(sessionStorageForm));
            this.form.patchValue(JSON.parse(sessionStorageForm));
        }

    }

    submit(): void {
        if(this.form.invalid){
            this.form.markAllAsTouched();
            return;
        }

        console.log(this.form.value)
    }

    private getComuni(search: string): Observable<IComune[]> {
        return this.http.get<IComune[]>('/api/comuni', {
            params : {search}
        })
    }


}
