import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { TokenResponse, LoginResponse, UserInfo } from '../models/responses';
import { AppConfigService } from '../config/app-config.service';
import { LocalStorageService } from '@core/services/local-storage.service';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({ providedIn: 'root' })
export class JwtService {
    private baseUrl: string;
    private TOKEN_KEY: string = '_at';
    private USER_KEY: string = 'username';
    private REFRESH_TOKEN_KEY: string = '_rt';
    private isLoggedIn = new BehaviorSubject<boolean>(!!this.getToken());

    constructor(
        private http: HttpClient,
        private router: Router,
        private appConfigService: AppConfigService,
        private localStorageService: LocalStorageService
    ) {
        this.appConfigService.getAppConfig().subscribe(appConfig => {
            this.baseUrl = appConfig.globalConfig.authRedirectUri.value;
        });
    }

    saveUserData(res: LoginResponse): void {
        this.localStorageService.set(this.TOKEN_KEY, res.accessToken, res.accessTokenExpiresIn);
        this.localStorageService.set(this.USER_KEY, JSON.stringify(res.user), res.refreshTokenExpiresIn);
        this.localStorageService.set(this.REFRESH_TOKEN_KEY, res.refreshToken, res.refreshTokenExpiresIn);
        this.isLoggedIn.next(true);
    }

    getToken(): string | null {
        return this.localStorageService.get(this.TOKEN_KEY);
    }

    getUser(): UserInfo {
        const user = this.localStorageService.get(this.USER_KEY);
        return user ? JSON.parse(user) : {} as UserInfo;
    }

    isRefreshTokenExpired(): boolean {
        return !this.localStorageService.get(this.REFRESH_TOKEN_KEY);
    }

    updateAccessToken(res: TokenResponse): void {
        this.localStorageService.set(this.TOKEN_KEY, res.accessToken, res.accessTokenExpiresIn);
    }

    refreshSession(): Observable<LoginResponse> {
        return this.http.post<LoginResponse>(
            `${this.baseUrl}/refresh-token`,
            {refreshToken: this.localStorageService.get(this.REFRESH_TOKEN_KEY)},
            httpOptions
        ).pipe(
            catchError(err => throwError('Failed to refresh token'))
        );
    }

    logOut(): void {
        this.localStorageService.removeAll();
        this.isLoggedIn.next(false);
        this.router.navigate(['/']);
    }

    get isLoggedIn$(): Observable<boolean> {
        return this.isLoggedIn.asObservable();
    }
}
