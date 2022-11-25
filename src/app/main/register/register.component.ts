import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';
import { TokenStorageService } from '../../services/token-storage.service';
import { AlertService } from '../../services/alert.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
    registerForm: FormGroup;
    hide = true;
    loading: boolean = false;

    constructor(
        private authService: AuthService,
        private tokenStorage: TokenStorageService,
        private alertService: AlertService,
        private router: Router
    ) { }

    get isRequired() {
        return this.registerForm.controls;
    }

    ngOnInit(): void {
        this.registerForm = new FormGroup({
            'username': new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
            'email': new FormControl(null, [Validators.required, Validators.email]),
            'password': new FormControl(null, [Validators.required, Validators.minLength(6)])
        });
    }

    onSubmit(): void {
        this.loading = true;
        const { username, email, password } = this.registerForm.value;

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
        ).add(() => {
            this.loading = false;
        });
    }
}
