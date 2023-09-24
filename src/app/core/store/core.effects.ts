import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {map, mergeMap, tap} from "rxjs";
import * as CoreActions from "./core.actions";
import {PeopleService} from "../../shared/services/people.service";

@Injectable()
export class CoreEffects {

    loginEffect$ = createEffect(() =>
      this.actions$.pipe(
          ofType(CoreActions.login),
          mergeMap(({email, password}) => this.peopleService.login(email, password)),
          tap(user => localStorage.setItem('user', JSON.stringify(user))),
          map(user => CoreActions.loginSuccess({user}))
      )
    )

    constructor(
        private actions$: Actions,
        private peopleService: PeopleService
    ) {

    }


}
