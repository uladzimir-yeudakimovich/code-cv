import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppConfigService } from '../core/config/app-config.service';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    baseUrl: string;

    constructor(appConfigService: AppConfigService, private http: HttpClient) {
        appConfigService.getAppConfig().subscribe(appConfig => this.baseUrl = appConfig.serviceConfig.baseCVServiceUrl.value);
    }

    login(username: string, password: string): Observable<any> {
        return new Observable(subscriber => {
            subscriber.next({
                accessToken: 'accessToken',
                username
            });
        });
        // return this.http.post(baseUrl + 'login', {
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
        // return this.http.post(baseUrl + 'registration', {
        //   username,
        //   email,
        //   password
        // }, httpOptions);
    }
}
