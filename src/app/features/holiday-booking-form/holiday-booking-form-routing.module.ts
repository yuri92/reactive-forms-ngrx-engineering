import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HolidayBookingFormComponent } from './holiday-booking-form.component';

const routes: Routes = [{ path: '', component: HolidayBookingFormComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HolidayBookingFormRoutingModule { }
