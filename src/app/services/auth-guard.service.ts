import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { TokenStorageService } from './token-storage.service';

@Injectable()
export class AuthGuard {

    constructor(private tokenStorageService: TokenStorageService, private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        const token = !!this.tokenStorageService.getToken();
        if (token) {
            return true;
        } else {
            this.router.navigate(['/']);
        }
    }
}
