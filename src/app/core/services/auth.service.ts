import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, timer } from 'rxjs';
import { AppConfigService } from '../config/app-config.service';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'SkipAuthorization': 'true',
    }),
};

@Injectable({ providedIn: 'root' })
export class AuthService {
    private baseUrl: string;

    constructor(appConfigService: AppConfigService, private http: HttpClient) {
        appConfigService.getAppConfig().subscribe(appConfig => {
            this.baseUrl = appConfig.globalConfig.authRedirectUri.value;
        });
    }

    login(username: string, password: string): Observable<any> {
        return this.http.post(`${this.baseUrl}/login`, {
            login: username,
            password,
        }, httpOptions);
    }

    register(username: string, email: string, password: string): Observable<any> {
        return this.http.post(`${this.baseUrl}/registration`, {
            login: username,
            email,
            password,
        }, httpOptions);
    }
}
