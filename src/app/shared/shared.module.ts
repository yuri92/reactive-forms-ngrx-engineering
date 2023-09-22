import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import {ReactiveFormsModule} from "@angular/forms";
import { FormAddressComponent } from './components/form-address/form-address.component';
import {NgSelectModule} from "@ng-select/ng-select";



@NgModule({
    declarations: [
    
    FileUploadComponent,
          FormAddressComponent
  ],
    exports: [
        FileUploadComponent,
        FormAddressComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        NgSelectModule
    ]
})
export class SharedModule { }
