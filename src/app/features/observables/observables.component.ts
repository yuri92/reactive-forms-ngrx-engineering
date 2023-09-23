import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, of, Subscription, tap, throwError} from 'rxjs';
import {catchError, finalize} from 'rxjs/operators';

@Component({
    selector: 'app-observables',
    templateUrl: './observables.component.html',
    styles: []
})
export class ObservablesComponent implements OnInit {

    value$: Observable<string>;

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
    }


}
