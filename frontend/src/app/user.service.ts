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
  private loginURL = 'http://localhost:8080/login'; // URL for login

  private isLoggedinV = false;

  constructor(private http: HttpClient) { }

  registerUser(user: User): Observable<User> {
    return this.http.post<User>(this.usersURL, user, httpOptions).pipe(map(res => res));
  }

  loginUser(user: User) {
    return this.http.post<User>(this.loginURL, user, httpOptions).pipe(map(res => this.isLoggedIn(res)));
  }

  getAllUser(): Observable<any> {
    return this.http.get('http://localhost:8080/users');
  }

  isLoggedIn(user: User) {
      this.isLoggedinV = true;
  }

  getLoggedin(): boolean {
    return this.isLoggedinV;
  }

  setLoggedin(b: boolean) {
    this.isLoggedinV = b;
  }

}
