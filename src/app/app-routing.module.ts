import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [{
    path: 'login',
    loadChildren: () => import('./features/login/login.module').then(m => m.LoginModule)
}, {
    path: 'holiday-booking-form',
    loadChildren: () => import('./features/holiday-booking-form/holiday-booking-form.module').then(m => m.HolidayBookingFormModule)
},
    {
        path: 'observables',
        loadChildren: () => import('./features/observables/observables.module').then(m => m.ObservablesModule)
    },
    {
        path: 'people',
        loadChildren: () => import('./features/ngrx-people/ngrx-people.module').then(m => m.NgrxPeopleModule)
    }];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
