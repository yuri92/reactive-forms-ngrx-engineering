import {Component} from '@angular/core';
import {PeopleService} from "../../shared/services/people.service";
import {PeopleState} from "./store/people.reducer";
import {Store} from "@ngrx/store";
import {Observable, tap} from "rxjs";
import {IUser} from "../../shared/models/interfaces/person.interface";
import {getPeople} from "./store/people.selectors";
import {loadPeople} from "./store/people.actions";

@Component({
    selector: 'app-ngrx-people',
    templateUrl: './ngrx-people.component.html',
    styles: []
})
export class NgrxPeopleComponent {

    people$: Observable<IUser[]>

    constructor(
        private store: Store<PeopleState>
    ) {
        this.people$ = this.store.select(getPeople);

    }


}
