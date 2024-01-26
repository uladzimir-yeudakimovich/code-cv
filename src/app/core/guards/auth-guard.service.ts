import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { JwtService } from '../services/jwt.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard {
    constructor(private jwtService: JwtService, private router: Router) {}

    canActivate(): Observable<boolean> {
        return this.jwtService.isLoggedIn$.pipe(
            take(1),
            map(isLoggedIn => {
                if (isLoggedIn) {
                    return true;
                } else {
                    this.router.navigate(['/login']);
                    return false;
                }
            })
        );
    }
}
