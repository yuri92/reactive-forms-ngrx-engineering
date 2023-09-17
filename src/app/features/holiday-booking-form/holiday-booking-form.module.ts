import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HolidayBookingFormRoutingModule } from './holiday-booking-form-routing.module';
import { HolidayBookingFormComponent } from './holiday-booking-form.component';
import { Step1Component } from './features/step1/step1.component';
import {ReactiveFormsModule} from "@angular/forms";
import {NgSelectModule} from "@ng-select/ng-select";
import {SharedModule} from "../../shared/shared.module";


@NgModule({
  declarations: [
    HolidayBookingFormComponent,
    Step1Component
  ],
    imports: [
        CommonModule,
        HolidayBookingFormRoutingModule,
        ReactiveFormsModule,
        NgSelectModule,
        SharedModule
    ]
})
export class HolidayBookingFormModule { }
