import {isDevMode, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {CORE_STATE_KEY, coreReducer} from "./core.reducer";
import { EffectsModule } from '@ngrx/effects';
import {CoreEffects} from "./core.effects";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot({[CORE_STATE_KEY]: coreReducer}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    EffectsModule.forRoot([CoreEffects]),
  ],
  providers: [
      CoreEffects
  ]
})
export class CoreStoreModule { }
