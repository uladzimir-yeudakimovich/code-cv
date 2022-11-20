import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/services/alert.service';
import { AuthService } from 'src/app/services/auth.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { MocAlertService, MocAuthService, MocRouter, MocTokenStorageService } from 'src/app/testing/mock-service.spec';
import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
    let component;

    beforeEach(async () => {
        TestBed.configureTestingModule({
            declarations: [LoginComponent],
            imports: [],
            providers: [
                {provide: AuthService, useClass: MocAuthService},
                {provide: TokenStorageService, useClass: MocTokenStorageService},
                {provide: AlertService, useClass: MocAlertService},
                {provide: Router, useClass: MocRouter},
            ],
        }).overrideComponent(LoginComponent, {
            set: {
                template: '<div></div>',
            }
        });

        const fixture = TestBed.createComponent(LoginComponent);
        component = fixture.componentInstance;
    });

    it('should create', () => {
        component.ngOnInit();
        expect(component).toBeDefined();
    });
});
