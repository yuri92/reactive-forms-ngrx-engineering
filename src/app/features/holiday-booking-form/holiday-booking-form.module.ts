import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HolidayBookingFormRoutingModule } from './holiday-booking-form-routing.module';
import { HolidayBookingFormComponent } from './holiday-booking-form.component';


@NgModule({
  declarations: [
    HolidayBookingFormComponent
  ],
  imports: [
    CommonModule,
    HolidayBookingFormRoutingModule
  ]
})
export class HolidayBookingFormModule { }
