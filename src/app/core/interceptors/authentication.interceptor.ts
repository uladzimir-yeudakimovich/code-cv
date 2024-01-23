import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { JwtService } from '../services/jwt.service';

@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {
    constructor(private jwtService: JwtService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (req.headers.get('SkipAuthorization') === 'true') {
            return next.handle(req);
        }

        return next.handle(this.addAuthenticationToken(req, null)).pipe(
            catchError((error: HttpErrorResponse) => {
                if (error && error.status === 401) {
                    if (this.jwtService.isRefreshTokenExpired()) {
                        this.jwtService.logOut();
                        return throwError('Refresh token expired');
                    } else {
                        return this.jwtService.refreshSession().pipe(
                            switchMap((res) => {
                                this.jwtService.updateAccessToken(res);
                                const newRequest = this.addAuthenticationToken(req, res.accessToken);
                                return next.handle(newRequest);
                            }),
                            catchError((err) => {
                                this.jwtService.logOut();
                                return throwError(err);
                            })
                        );
                    }
                } else {
                    return throwError(error);
                }
            })
        );
    }

    private addAuthenticationToken(req: HttpRequest<any>, token: string | null): HttpRequest<any> {
        const jwtToken = this.jwtService.getToken();
        return jwtToken ? req.clone({
            setHeaders: {
                Authorization: `Bearer ${jwtToken}`,
            },
        }) : req.clone();
    }
}
