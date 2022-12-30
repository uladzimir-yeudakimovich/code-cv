import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { LoginFormComponent } from './forms/login-form/login-form.component';
import { RegisterFormComponent } from './forms/register-form/register-form.component';
import { SharedModule } from '../share/shared.module';

import { LoginComponent } from './login/components/login.component';
import { LoginPageComponent } from './login/containers/login-page.component';
import { RegisterComponent } from './register/components/register.component';
import { RegisterPageComponent } from './register/containers/register-page.component';

@NgModule({
    imports: [
        SharedModule,
        TranslateModule,
        CommonModule,
    ],
    exports: [
        LoginPageComponent,
        RegisterPageComponent,
    ],
    declarations: [
        LoginFormComponent,
        LoginComponent,
        LoginPageComponent,
        RegisterFormComponent,
        RegisterComponent,
        RegisterPageComponent,
    ],
})
export class MainModule { }
