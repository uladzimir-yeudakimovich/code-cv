import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';
import { TokenStorageService } from '../../services/token-storage.service';
import { AlertService } from '../../services/alert.service';

@Component({
    selector: 'login-page',
    templateUrl: './login-page.component.html',
})
export class LoginPageComponent {

    constructor(
        private authService: AuthService,
        private tokenStorage: TokenStorageService,
        private alertService: AlertService,
        private router: Router,
    ) { }

    onSubmit(credentials): void {
        const { username, password } = credentials;

        this.authService.login(username, password).subscribe(
            data => {
                this.tokenStorage.saveUser(data);
                this.tokenStorage.saveToken(data.accessToken);
                this.alertService.success(`Logged in as ${data.username}`);
                this.router.navigate(['/home']);
            },
            err => {
                this.alertService.error(err.error.message || err.statusText);
            }
        );
    }
}
