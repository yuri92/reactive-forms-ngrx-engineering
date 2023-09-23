import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from "@angular/common/http";
import {CoreStoreModule} from "./store/core-store.module";


@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        HttpClientModule,
        CoreStoreModule
    ]
})
export class CoreModule {
}
