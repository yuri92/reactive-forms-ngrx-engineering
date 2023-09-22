import {Component, Input} from '@angular/core';
import {
    AbstractControl,
    ControlValueAccessor, NG_VALIDATORS,
    NG_VALUE_ACCESSOR,
    ValidationErrors,
    Validator,
    Validators
} from "@angular/forms";
import {HttpClient, HttpEventType} from "@angular/common/http";
import {v4 as uuid} from 'uuid';
import {catchError, finalize, of} from "rxjs";

@Component({
    selector: 'file-upload',
    templateUrl: './file-upload.component.html',
    styles: [],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            multi: true,
            useExisting: FileUploadComponent
        },
        {
            provide: NG_VALIDATORS,
            multi: true,
            useExisting: FileUploadComponent
        }
    ]
})
export class FileUploadComponent implements ControlValueAccessor, Validator {

    @Input() requiredFileType: string;

    value: { fileName: string, id: string };
    onTouched = () => {
    };
    onChange = (obj: { fileName: string, id: string }) => {
    };
    onValidatorChange: () => void;
    isDisabled = false;
    isTouched = false;
    uploadProgress = 0;


    fileUploadSuccess = false;
    fileUploadError = false;

    constructor(private http: HttpClient) {
    }

    onClick(fileUpload: HTMLInputElement): void {
        this.onTouched();
        this.isTouched = true;
        fileUpload.click();
    }

    onFileSelected(event): void {
        const file: File = event.target.files[0];
        console.log('uploaded file', file)

        const formData = new FormData();
        const fileId = uuid();

        formData.append('thumbnail', file);
        formData.append('id', fileId);

        this.http.post('/api/upload-thumbnail', formData, {
            reportProgress: true,
            observe: "events"
        }).pipe(
            catchError(err => {
                this.fileUploadError = true;
                return of(err)
            }),
            finalize(() => {
                this.uploadProgress = 0
                this.onValidatorChange();
            })
        ).subscribe(event => {
            if (event.type === HttpEventType.UploadProgress) {
                this.uploadProgress = Math.round(100 * (event.loaded / event.total));

            } else if (event.type === HttpEventType.Response) {
                this.fileUploadSuccess = true;

                this.value = {
                    fileName: file.name,
                    id: fileId
                }

                this.onChange({
                    fileName: file.name,
                    id: fileId
                })
            }
        })

    }


    registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }

    // registerOnValidatorChange(fn: () => void) {
    //     this.onValidatorChange = fn;
    // }

    setDisabledState(isDisabled: boolean): void {
        this.isDisabled = isDisabled
    }

    writeValue(obj: { fileName: string, id: string }): void {
        this.value = obj;
    }

    validate(control: AbstractControl): ValidationErrors | null {

        if (this.fileUploadSuccess) {
            return null
        }

        let errors: any = {
            error: this.requiredFileType
        }

        if (this.fileUploadError) {
            errors.uploadFailed = true
        }

        return errors;
    }


}
