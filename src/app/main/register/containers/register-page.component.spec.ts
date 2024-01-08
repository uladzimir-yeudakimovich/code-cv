import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/services/alert.service';
import { AuthService } from '@core/services/auth.service';
import { JwtService } from '@core/services/jwt.service';
import { MockAlertService, MockAuthService, MockRouter, MockJwtService } from 'src/app/testing/mock-service.spec';
import { RegisterPageComponent } from './register-page.component';

describe('RegisterPageComponent', () => {
    let component: RegisterPageComponent;

    beforeEach(async () => {
        TestBed.configureTestingModule({
            declarations: [RegisterPageComponent],
            imports: [],
            providers: [
                {provide: AuthService, useClass: MockAuthService},
                {provide: JwtService, useClass: MockJwtService},
                {provide: AlertService, useClass: MockAlertService},
                {provide: Router, useClass: MockRouter},
            ],
        }).overrideComponent(RegisterPageComponent, {
            set: {
                template: '<div></div>',
            },
        });
        const fixture = TestBed.createComponent(RegisterPageComponent);
        component = fixture.componentInstance;
    });

    it('should create', () => {
        expect(component).toBeDefined();
    });
});
