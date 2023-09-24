import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IUser} from "../models/interfaces/person.interface";

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(
      private http: HttpClient
  ) { }

  public getPeople(): Observable<IUser[]> {
    return this.http.get<IUser[]>('/api/people');
  }

  public login(email: string, password: string): Observable<IUser> {
    return this.http.post<IUser>('/api/login', null);
  }
}
