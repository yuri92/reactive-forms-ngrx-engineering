import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IPerson} from "../models/interfaces/person.interface";

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(
      private http: HttpClient
  ) { }

  public getPeople(): Observable<IPerson[]> {
    return this.http.get<IPerson[]>('/api/people');
  }

  // public login(email: string, password: string): Observable<IPerson> {
  //   return this.http.post<IPerson>('/api/login', null);
  // }
}
