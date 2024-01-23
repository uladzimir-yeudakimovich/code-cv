import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { JwtService } from '../services/jwt.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard {
    isLoggedIn: boolean;

    constructor(private jwtService: JwtService) {
        this.jwtService.isLoggedIn$.subscribe(
            isLogin => {
                this.isLoggedIn = isLogin;
            },
            error => {
                throwError('Error in AuthGuard:', error);
            }
        );
    }

    canActivate(): boolean {
        if (this.isLoggedIn) {
            return true;
        } else {
            this.jwtService.logOut();
            return false;
        }
    }
}
