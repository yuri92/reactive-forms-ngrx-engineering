import {Component} from '@angular/core';
import {PeopleService} from "../../shared/services/people.service";

@Component({
    selector: 'app-ngrx-people',
    templateUrl: './ngrx-people.component.html',
    styles: []
})
export class NgrxPeopleComponent {

    people$ = this.peopleService.getPeople()

    constructor(
        private peopleService: PeopleService
    ) {
    }


}
