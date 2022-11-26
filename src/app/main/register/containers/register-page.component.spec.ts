import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/services/alert.service';
import { AuthService } from 'src/app/services/auth.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { MocAlertService, MocAuthService, MocRouter, MocTokenStorageService } from 'src/app/testing/mock-service.spec';
import { RegisterPageComponent } from './register-page.component';

describe('RegisterPageComponent', () => {
    let component: RegisterPageComponent;

    beforeEach(async () => {
        TestBed.configureTestingModule({
            declarations: [RegisterPageComponent],
            imports: [],
            providers: [
                {provide: AuthService, useClass: MocAuthService},
                {provide: TokenStorageService, useClass: MocTokenStorageService},
                {provide: AlertService, useClass: MocAlertService},
                {provide: Router, useClass: MocRouter},
            ],
        }).overrideComponent(RegisterPageComponent, {
            set: {
                template: '<div></div>'
            },
        });
        const fixture = TestBed.createComponent(RegisterPageComponent);
        component = fixture.componentInstance;
    });

    it('should create', () => {
        expect(component).toBeDefined();
    });
});
