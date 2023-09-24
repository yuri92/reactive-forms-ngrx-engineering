import { Injectable } from '@angular/core';
import {Actions} from "@ngrx/effects";
import {IUser} from "../../shared/models/interfaces/person.interface";

@Injectable()
export class CoreEffects {
  constructor(
      private actions$: Actions
  ) {

    this.actions$.subscribe(action => {
      if(action.type === '[Login page] A user has logged in') {
        const user: IUser = action['user'];
        localStorage.setItem('user', JSON.stringify(user))
      }
    })

  }
}
