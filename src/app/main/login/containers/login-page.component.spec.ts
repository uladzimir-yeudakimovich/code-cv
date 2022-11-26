import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/services/alert.service';
import { AuthService } from 'src/app/services/auth.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { MocAlertService, MocAuthService, MocRouter, MocTokenStorageService } from 'src/app/testing/mock-service.spec';
import { LoginPageComponent } from './login-page.component';

describe('LoginPageComponent', () => {
    let component: LoginPageComponent;

    beforeEach(async () => {
        TestBed.configureTestingModule({
            declarations: [LoginPageComponent],
            imports: [],
            providers: [
                {provide: AuthService, useClass: MocAuthService},
                {provide: TokenStorageService, useClass: MocTokenStorageService},
                {provide: AlertService, useClass: MocAlertService},
                {provide: Router, useClass: MocRouter},
            ],
        }).overrideComponent(LoginPageComponent, {
            set: {
                template: '<div></div>'
            },
        });
        const fixture = TestBed.createComponent(LoginPageComponent);
        component = fixture.componentInstance;
    });

    it('should create', () => {
        expect(component).toBeDefined();
    });
});
