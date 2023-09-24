import { Component } from '@angular/core';
import {Store} from "@ngrx/store";
import {CoreState} from "./core/store/core.reducer";
import {map, Observable, tap} from "rxjs";
import {IPerson} from "./shared/models/interfaces/person.interface";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {
  title = 'angular-engineering-forms-ngrx';

  user$: Observable<IPerson>;

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
    },{
      title: '[NgRx] People',
      routerLink: 'people'
    },
  ]

  constructor(
      private store: Store<CoreState>
  ) {
    this.user$ = this.store.pipe(
        map((state: any) => state.core.user)
    );
  }
}
