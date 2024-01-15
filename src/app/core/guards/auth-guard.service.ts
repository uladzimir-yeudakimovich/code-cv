import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { JwtService } from '../services/jwt.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard {

    constructor(private jwtService: JwtService, private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        const token = !!this.jwtService.getToken();
        if (token) {
            return true;
        } else {
            this.router.navigate(['/']);
            return false;
        }
    }
}
