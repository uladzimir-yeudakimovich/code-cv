import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, throwError } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { AuthService } from '../../../core/services/auth.service';
import { JwtService } from '../../../core/services/jwt.service';
import { AlertService } from '../../../services/alert.service';
import { UserCredentials } from '@shared/models/models';

@Component({
    selector: 'login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['../../../styles/styles.scss'],
})
export class LoginPageComponent implements OnInit {
    isLoggedIn: boolean;
    unsubscribe = new Subject<void>();

    constructor(
        private authService: AuthService,
        private jwtService: JwtService,
        private alertService: AlertService,
        private router: Router,
    ) {}

    ngOnInit() {
        this.jwtService.isLoggedIn$.pipe(takeUntil(this.unsubscribe)).subscribe(
            isLogin => {
                this.isLoggedIn = isLogin;
            },
            error => {
                throwError('Error in Login Page:', error);
            }
        );
    }

    onSubmit(credentials: UserCredentials): void {
        const { username, password } = credentials;

        this.authService.login(username, password).subscribe(
            data => {
                this.jwtService.saveUserData(data);
                this.router.navigate(['/home']);
            },
            err => {
                this.alertService.setMessage('error', err.error.message || err.error.error);
            }
        );
    }
}
