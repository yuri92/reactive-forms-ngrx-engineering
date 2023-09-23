import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgrxPeopleComponent } from './ngrx-people.component';

const routes: Routes = [{ path: '', component: NgrxPeopleComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NgrxPeopleRoutingModule { }
