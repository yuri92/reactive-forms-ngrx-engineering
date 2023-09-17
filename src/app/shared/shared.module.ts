import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
    declarations: [
    
    FileUploadComponent
  ],
    exports: [
        FileUploadComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule
    ]
})
export class SharedModule { }
