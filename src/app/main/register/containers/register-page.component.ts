import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../../core/services/auth.service';
import { JwtService } from '../../../core/services/jwt.service';
import { AlertService } from '../../../services/alert.service';

@Component({
    selector: 'register-page',
    templateUrl: './register-page.component.html',
})
export class RegisterPageComponent {

    constructor(
        private authService: AuthService,
        private tokenStorage: JwtService,
        private alertService: AlertService,
        private router: Router,
    ) { }

    onSubmit(credentials): void {
        const { username, email, password } = credentials;

        this.authService.register(username, email, password).subscribe(
            data => {
                this.tokenStorage.saveUserData(data);
                this.router.navigate(['/home']);
            },
            err => {
                this.alertService.setMessage('error', err.error.message || err.statusText);
            }
        );
    }
}
