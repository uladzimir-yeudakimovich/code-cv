import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';
import { TokenStorageService } from '../../services/token-storage.service';
import { AlertService } from '../../services/alert.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  hide: boolean = true;
  loading: boolean = false;

  constructor(
    private authService: AuthService,
    private tokenStorage: TokenStorageService,
    private alertService: AlertService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      'username': new FormControl(null, Validators.required),
      'password': new FormControl(null, [Validators.required, Validators.minLength(6)])
    });
  }
  
  get isRequired() {
    return this.loginForm.controls;
  }

  onSubmit(): void {
    this.loading = true;
    const { username, password } = this.loginForm.value;

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
    ).add(() => {
      this.loading = false;
    });
  }
}
