import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NgrxPeopleComponent} from './ngrx-people.component';
import {ngrxPeopleResolver} from "./ngrx-people.resolver";



const routes: Routes = [
    {
      path: '',
      component: NgrxPeopleComponent,
      resolve: {ngrxPeopleResolver}
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class NgrxPeopleRoutingModule {
}
