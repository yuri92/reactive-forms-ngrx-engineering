import {ResolveFn} from '@angular/router';
import {Store} from "@ngrx/store";
import {PeopleState} from "./store/people.reducer";
import {inject} from "@angular/core";
import {arePeopleLoaded} from "./store/people.selectors";
import {filter, take, tap} from "rxjs";
import {loadPeople} from "./store/people.actions";

export const ngrxPeopleResolver: ResolveFn<boolean> = (route, state) => {
  const store: Store<PeopleState> = inject(Store);

  return store.select(arePeopleLoaded).pipe(
      tap(peopleLoaded => {
        if(!peopleLoaded){
          store.dispatch(loadPeople())
        }
      }),
      filter(arePeopleLoaded => arePeopleLoaded),
      take(1)
  )
};
