import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {NgrxPeopleRoutingModule} from './ngrx-people-routing.module';
import {NgrxPeopleComponent} from './ngrx-people.component';
import {StoreModule} from "@ngrx/store";
import {peopleFeature} from "./store/people.reducer";
import {EffectsModule} from "@ngrx/effects";
import {PeopleEffects} from "./store/people.effects";


@NgModule({
    declarations: [
        NgrxPeopleComponent
    ],
    imports: [
        CommonModule,
        NgrxPeopleRoutingModule,
        StoreModule.forFeature(peopleFeature),
        EffectsModule.forFeature([PeopleEffects])
    ]
})
export class NgrxPeopleModule {
}
