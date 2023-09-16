import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [{
    path: 'login',
    loadChildren: () => import('./features/login/login.module').then(m => m.LoginModule)
}, {
    path: 'holiday-booking-form',
    loadChildren: () => import('./features/holiday-booking-form/holiday-booking-form.module').then(m => m.HolidayBookingFormModule)
}];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
