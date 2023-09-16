import {Component, inject} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {CFInitialsValidator} from "./step1.utils";
import {HttpClient, HttpEventType} from "@angular/common/http";

@Component({
    selector: 'app-step1',
    templateUrl: './step1.component.html',
    styles: []
})
export class Step1Component {

    uploadProgress = 0;
    uploadSuccess = false;

    form = inject(FormBuilder).group({
        nome: ['', [Validators.required]],
        cognome: ['', Validators.required],
        codiceFiscale: [{value: '', disabled: true}, [Validators.required, Validators.pattern(/[A-MZ][1-9]\d{2}|[A-M]0(?:[1-9]\d|0[1-9])/)]],
        termsAndConditions: [false, [Validators.requiredTrue]],
        documento: ['', [Validators.required]]
    }, {
        validators: CFInitialsValidator()
    })

    constructor(
        private http: HttpClient
    ) {

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

    submit(): void {
        if(this.form.invalid){
            this.form.markAllAsTouched();
            return;
        }

        console.log(this.form.value)
    }

    onFileSelected(event): void {
        const file: File = event.target.files[0];
        const formData = new FormData();
        formData.append('thumbnail', file);

        this.http.post('/api/upload-thumbnail', formData, {
            reportProgress: true,
            observe: "events"
        }).subscribe(event => {
            if(event.type === HttpEventType.UploadProgress) {
                this.uploadProgress = Math.round(100 * (event.loaded / event.total));

            } else if(event.type === HttpEventType.Response) {
                this.uploadSuccess = true;
                this.uploadProgress = 0;
            }
        })

    }


}
