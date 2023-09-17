import { Component } from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";
import {HttpClient, HttpEventType} from "@angular/common/http";
import {v4 as uuid} from 'uuid';

@Component({
  selector: 'file-upload',
  templateUrl: './file-upload.component.html',
  styles: [
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: FileUploadComponent
    }
  ]
})
export class FileUploadComponent implements ControlValueAccessor {

  value: {fileName: string, id: string};
  onTouched = () => {};
  onChange = (obj : {fileName: string, id: string}) => {};
  isDisabled = false;
  isTouched = false;
  uploadProgress = 0;
  uploadSuccess = false;

  constructor(private http: HttpClient) {
  }

  onClick(fileUpload: HTMLInputElement): void {
    this.onTouched();
    this.isTouched = true;
    fileUpload.click();
  }

  onFileSelected(event): void {
    const file: File = event.target.files[0];
    const formData = new FormData();
    const fileId = uuid();

    formData.append('thumbnail', file);
    formData.append('id', fileId);

    this.http.post('/api/upload-thumbnail', formData, {
      reportProgress: true,
      observe: "events"
    }).subscribe(event => {
      if(event.type === HttpEventType.UploadProgress) {
        this.uploadProgress = Math.round(100 * (event.loaded / event.total));

      } else if(event.type === HttpEventType.Response) {
        this.uploadSuccess = true;
        this.uploadProgress = 0;

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

  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled
  }

  writeValue(obj: {fileName: string, id: string}): void {
    this.value = obj;
  }

}
