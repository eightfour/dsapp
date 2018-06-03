import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from './user';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class UserService {

  private usersURL = 'http://localhost:8080/users'; // URL for register

  constructor(private http: HttpClient) { }

  registerUser(user: User): Observable<User> {
    return this.http.post<User>(this.usersURL, user, httpOptions).pipe(map(res => res));
  }

  getAllUser(): Observable<any> {
    return this.http.get('http://localhost:8080/users');
  }

}
