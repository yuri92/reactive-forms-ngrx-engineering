import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {NgrxPeopleRoutingModule} from './ngrx-people-routing.module';
import {NgrxPeopleComponent} from './ngrx-people.component';
import {StoreModule} from "@ngrx/store";
import {KEY_STORE_PEOPLE, peopleReducer} from "./store/people.reducer";
import {EffectsModule} from "@ngrx/effects";
import {PeopleEffects} from "./store/people.effects";


@NgModule({
    declarations: [
        NgrxPeopleComponent
    ],
    imports: [
        CommonModule,
        NgrxPeopleRoutingModule,
        StoreModule.forFeature(KEY_STORE_PEOPLE, peopleReducer),
        EffectsModule.forFeature([PeopleEffects])
    ]
})
export class NgrxPeopleModule {
}
