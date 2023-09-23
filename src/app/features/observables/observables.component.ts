import {Component, inject, OnInit} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {SharedService} from "../../shared/services/shared.service";

@Component({
    selector: 'app-observables',
    templateUrl: './observables.component.html',
    styles: []
})
export class ObservablesComponent implements OnInit {

    value$: Observable<number>;
    valueBehaviorSubject$: Observable<number>;
    service = inject(SharedService)

    constructor() {
    }

    ngOnInit() {
        // const customObservable: Observable<string> = new Observable((subscriber) => {
        //     for (let i = 0; i < 1000; i++) {
        //         setTimeout(() => {
        //             subscriber.next(`Emesso valore ${i}`);
        //         }, i * 1000)
        //     }
        // });
        //
        // this.value$ = customObservable;
        // setTimeout(() => {
        //     this.value2$ = customObservable;
        // }, 3000)

        // const subject: Subject<string> = new Subject();
        //
        // let i = 0;
        // setInterval(() => {
        //     subject.next('Valore ' + i++)
        // }, 1000)
        //
        // subject.subscribe(value => console.log('Observer Yuri', value))
        //
        // setTimeout(() => {
        //     subject.subscribe(value => console.log('Observer Andrea', value))
        // }, 3000)

        this.value$ = this.service.valueSubject$;
        this.valueBehaviorSubject$ = this.service.valueBehaviorSubject$;
    }


}
