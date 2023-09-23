import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {
  title = 'angular-engineering-forms-ngrx';

  nav = [
    {
      title: 'Login',
      routerLink: 'login'
    },{
      title: 'Holiday form',
      routerLink: 'holiday-booking-form'
    },{
      title: 'Observables',
      routerLink: 'observables'
    },
  ]
}
