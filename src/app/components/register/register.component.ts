import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

import { AuthService } from '../../services/auth.service';
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
  private subscription: Subscription;

  constructor(private authService: AuthService, private alertService: AlertService) { }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      'username': new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(6)])
    });
  }
  
  get isRequired() {
    return this.registerForm.controls;
  }

  onSubmit(): void {
    this.loading = true;
    const { username, email, password } = this.registerForm.value;

    this.subscription = this.authService.register(username, email, password).subscribe(
      data => {
        console.log(data);
        this.alertService.success('Your registration is successful!');
      },
      err => {
        this.alertService.error(err.error.message || err.statusText);
      }
    ).add(() => {
      this.loading = false;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
