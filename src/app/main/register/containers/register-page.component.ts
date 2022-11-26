import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../../services/auth.service';
import { TokenStorageService } from '../../../services/token-storage.service';
import { AlertService } from '../../../services/alert.service';

@Component({
    selector: 'register-page',
    templateUrl: './register-page.component.html',
})
export class RegisterPageComponent {

    constructor(
        private authService: AuthService,
        private tokenStorage: TokenStorageService,
        private alertService: AlertService,
        private router: Router,
    ) { }

    onSubmit(credentials): void {
        const { username, email, password } = credentials;

        this.authService.register(username, email, password).subscribe(
            data => {
                this.tokenStorage.saveUser(data);
                this.tokenStorage.saveToken(data.accessToken);
                this.alertService.success(`Your registration is successful as ${data.username}!`);
                this.router.navigate(['/home']);
            },
            err => {
                this.alertService.error(err.error.message || err.statusText);
            }
        );
    }
}
