import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../../core/services/auth.service';
import { JwtService } from '../../../core/services/jwt.service';
import { AlertService } from '../../../services/alert.service';
import { UserCredentials } from '@shared/models/models';

@Component({
    selector: 'register-page',
    templateUrl: './register-page.component.html',
    styleUrls: ['../../../styles/styles.scss'],
})
export class RegisterPageComponent {
    constructor(
        public jwtService: JwtService,
        private authService: AuthService,
        private alertService: AlertService,
        private router: Router,
    ) {}

    onSubmit(credentials: UserCredentials): void {
        const { username, email, password } = credentials;

        this.authService.register(username, email, password).subscribe(
            data => {
                this.jwtService.saveUserData(data);
                this.router.navigate(['/home']);
            },
            err => {
                this.alertService.setMessage('error', err.error.message || err.statusText);
            }
        );
    }
}
