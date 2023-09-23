import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {Observable, of, Subscription, tap, throwError} from 'rxjs';
import {catchError, finalize} from 'rxjs/operators';
import {SharedService} from "../../shared/shared.service";

@Component({
    selector: 'app-observables',
    templateUrl: './observables.component.html',
    styles: []
})
export class ObservablesComponent implements OnInit {

    value$: Observable<string>;
    value2$: Observable<string>;
    service = inject(SharedService)

    constructor() {
    }

    ngOnInit() {
        const customObservable: Observable<string> = new Observable((subscriber) => {
            for (let i = 0; i < 1000; i++) {
                setTimeout(() => {
                    subscriber.next(`Emesso valore ${i}`);
                }, i * 1000)
            }
        });

        this.value$ = customObservable;
        setTimeout(() => {
            this.value2$ = customObservable;
        }, 3000)
    }


}
