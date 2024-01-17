import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { TokenResponse, LoginResponse } from '../models/responses';
import { AppConfigService } from '../config/app-config.service';

const TOKEN_KEY = '_at';
const USER_KEY = 'username';
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({ providedIn: 'root' })
export class JwtService {
    baseUrl: string;
    private isLoggedIn = new BehaviorSubject<boolean>(!!this.getToken());
    private refreshToken: string | null = null;
    private expirationTimestamp: number | null = null;

    constructor(private http: HttpClient, private router: Router, appConfigService: AppConfigService) {
        appConfigService.getAppConfig().subscribe(appConfig => {
            this.baseUrl = appConfig.globalConfig.authRedirectUri.value;
        });
    }

    saveUserData(res: LoginResponse): void {
        window.sessionStorage.removeItem(TOKEN_KEY);
        window.sessionStorage.setItem(TOKEN_KEY, res.accessToken);
        window.sessionStorage.removeItem(USER_KEY);
        window.sessionStorage.setItem(USER_KEY, JSON.stringify(res.user));
        this.refreshToken = res.refreshToken;
        this.expirationTimestamp = Date.now() / 1000 + res.refreshTokenExpiresIn;
        this.isLoggedIn.next(true);
    }

    getToken(): string | null {
        return window.sessionStorage.getItem(TOKEN_KEY);
    }

    getUser(): any {
        const user = window.sessionStorage.getItem(USER_KEY);
        if (user) {
            return JSON.parse(user);
        }

        return {};
    }

    isRefreshTokenExpired(): boolean {
        return this.expirationTimestamp < Date.now() / 1000;
    }

    updateAccessToken(res: TokenResponse): void {
        window.sessionStorage.removeItem(TOKEN_KEY);
        window.sessionStorage.setItem(TOKEN_KEY, res.accessToken);
    }

    dispatchRefreshSession(): Observable<any> {
        return this.http.post(`${this.baseUrl}/refresh-token`, {
            refreshToken: this.refreshToken,
        }, httpOptions);
    }

    dispatchRefreshAccessToken(): Observable<boolean | void> {
        if (this.isRefreshTokenExpired()) {
            this.logOut();
            return throwError('Refresh token expired');
        }
    }

    get refreshComplete$(): Observable<boolean> {
        return this.isLoggedIn.asObservable();
    }

    logOut(): void {
        window.sessionStorage.clear();
        this.isLoggedIn.next(false);
        this.router.navigate(['/']);
    }
}
