import {isDevMode, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {coreReducer} from "./core.reducer";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot({'core': coreReducer}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
  ]
})
export class CoreStoreModule { }
