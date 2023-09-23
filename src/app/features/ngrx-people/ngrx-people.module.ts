import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgrxPeopleRoutingModule } from './ngrx-people-routing.module';
import { NgrxPeopleComponent } from './ngrx-people.component';


@NgModule({
  declarations: [
    NgrxPeopleComponent
  ],
  imports: [
    CommonModule,
    NgrxPeopleRoutingModule
  ]
})
export class NgrxPeopleModule { }
