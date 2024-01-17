import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { EMPTY, Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { JwtService } from '../services/jwt.service';

@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {
    constructor(private jwtService: JwtService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (req.headers.get('SkipAuthorization') === 'true') {
            return next.handle(req);
        }

        return next.handle(this.addAuthenticationToken(req)).pipe(
            catchError((error: HttpErrorResponse) => {
                if (error && error.status === 401) {
                    if (this.jwtService.isRefreshTokenExpired()) {
                        this.jwtService.dispatchRefreshAccessToken();
                        return EMPTY;
                    } else {
                        this.jwtService.dispatchRefreshSession().subscribe(
                            res => {
                                this.jwtService.updateAccessToken(res);
                            },
                            err => {
                                this.jwtService.logOut();
                                return throwError(err);
                            }
                        );
                    }
                    return throwError(error);
                } else {
                    this.jwtService.logOut();
                    return throwError(error);
                }
            })
        );
    }

    private addAuthenticationToken(req: HttpRequest<any>): HttpRequest<any> {
        const jwtToken = this.jwtService.getToken();
        return jwtToken ? req.clone({
            setHeaders: {
                Authorization: `Bearer ${jwtToken}`,
            },
        }) : req.clone();
    }
}
