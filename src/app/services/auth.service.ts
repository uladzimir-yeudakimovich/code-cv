import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'https://uladzimir-yeudakimovich.herokuapp.com/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    return new Observable(subscriber => {
      subscriber.next({
        accessToken: 'accessToken',
        username
      });
    });
    // return this.http.post(AUTH_API + 'login', {
    //   username,
    //   password
    // }, httpOptions);
  }

  register(username: string, email: string, password: string): Observable<any> {
    return new Observable(subscriber => {
      subscriber.next({
        accessToken: 'accessToken',
        username
      });
    });
    // return this.http.post(AUTH_API + 'registration', {
    //   username,
    //   email,
    //   password
    // }, httpOptions);
  }
}