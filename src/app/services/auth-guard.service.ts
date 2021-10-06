import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { TokenStorageService } from './token-storage.service';

@Injectable()
export class AuthGuadg implements CanActivate {

  constructor(private tokenStorageService: TokenStorageService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (!!this.tokenStorageService.getToken()) {
      return true;
    } else {
      this.router.navigate(['/']);
    }
  }
} 