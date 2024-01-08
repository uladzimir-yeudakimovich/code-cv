import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../../core/services/auth.service';
import { JwtService } from '../../../core/services/jwt.service';
import { AlertService } from '../../../services/alert.service';

@Component({
    selector: 'login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
    isLoggedIn: boolean;

    constructor(
        private authService: AuthService,
        private jwtService: JwtService,
        private alertService: AlertService,
        private router: Router,
    ) {}

    ngOnInit() {
        this.jwtService.refreshComplete$.subscribe(isLogin => {
            this.isLoggedIn = isLogin;
        });
    }

    onSubmit(credentials): void {
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
