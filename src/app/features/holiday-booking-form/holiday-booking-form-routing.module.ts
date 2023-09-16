import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {Step1Component} from "./features/step1/step1.component";
import {HolidayBookingFormComponent} from "./holiday-booking-form.component";

const routes: Routes = [
    {
      path: '',
      pathMatch: "full",
      redirectTo: 'step1',
    },
  {
    path: '',
    component: HolidayBookingFormComponent,
    children: [
      {
        path: 'step1',
        component: Step1Component
      }
    ]
  }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HolidayBookingFormRoutingModule {
}
