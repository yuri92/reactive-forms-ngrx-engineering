import { Injectable } from '@angular/core';
import {BehaviorSubject, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  public helloWorldString = 'Hello world';

  private valueSubject: Subject<number> = new Subject();
  public valueSubject$ = this.valueSubject.asObservable();

  private valueBehaviorSubject = new BehaviorSubject<number>(0);
  public valueBehaviorSubject$ = this.valueBehaviorSubject.asObservable();

  constructor() {
    let i = 0;
    setInterval(() => {
      this.helloWorldString = `Hello world ${i++}`;
    }, 1000)

    let j = 0;
    setInterval(() => {
      this.valueSubject.next(j++)
    }, 1000)


    let z = 0;
    setInterval(() => {
      this.valueBehaviorSubject.next(z++)
    }, 1000)
  }


}
