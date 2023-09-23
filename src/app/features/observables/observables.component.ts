import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, of, Subscription, throwError} from 'rxjs';
import {catchError, finalize} from 'rxjs/operators';

@Component({
    selector: 'app-observables',
    templateUrl: './observables.component.html',
    styles: []
})
export class ObservablesComponent implements OnInit, OnDestroy {

    private subs = new Subscription();

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

        this.subs.add(
            customObservable.subscribe(value => {
                console.log('Observer: ' + value);
            })
        )


        // const customObservable: Observable<string> = new Observable((subscriber) => {
        //     setTimeout(() => {
        //         subscriber.next('Valore 1');
        //     }, 1000);
        //
        //     setTimeout(() => {
        //         subscriber.next('Valore 2');
        //     }, 2000);
        //
        //     setTimeout(() => {
        //         subscriber.error('Si è verificato un errore');
        //     }, 3000);
        //
        //     setTimeout(() => {
        //         subscriber.next('Valore 3');
        //     }, 4000);
        //
        //     setTimeout(() => {
        //         subscriber.complete();
        //     }, 5000);
        // });


        // customObservable
        //     .pipe(
        //         catchError((error) => {
        //             console.error('Errore:', error);
        //             return throwError('Errore gestito');
        //         }),
        //         finalize(() => {
        //             console.log('Observable completato');
        //         })
        //     )
        //     .subscribe((value) => {
        //         console.log('Valore ricevuto:', value);
        //     });
    }

    ngOnDestroy() {
        this.subs.unsubscribe();
    }


}
