import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  public helloWorldString = 'Hello world';

  constructor() {
    let i = 0;
    setInterval(() => {
      this.helloWorldString = `Hello world ${i++}`;
    }, 1000)
  }
}
