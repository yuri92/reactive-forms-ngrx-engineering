import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import * as PeopleActions from "./people.actions";
import {map, mergeMap} from "rxjs";
import {PeopleService} from "../../../shared/services/people.service";

@Injectable()
export class PeopleEffects {

    loadPeople$ = createEffect(() =>
        this.actions$.pipe(
            ofType(PeopleActions.loadPeople),
            mergeMap(() => this.peopleService.getPeople()),
            map(people => PeopleActions.loadPeopleSuccess({people}))
        )
    )

    constructor(
        private actions$: Actions,
        private peopleService: PeopleService
    ) {
    }

}