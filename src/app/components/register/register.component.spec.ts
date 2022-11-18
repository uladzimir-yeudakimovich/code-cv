import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/services/alert.service';
import { AuthService } from 'src/app/services/auth.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { MocAlertService, MocAuthService, MocRouter, MocTokenStorageService } from 'src/app/testing/mock-service.spec';
import { RegisterComponent } from './register.component';

describe('RegisterComponent', () => {
    let component;

    beforeEach(async () => {
        TestBed.configureTestingModule({
            declarations: [RegisterComponent],
            imports: [],
            providers: [
                {provide: AuthService, useClass: MocAuthService},
                {provide: TokenStorageService, useClass: MocTokenStorageService},
                {provide: AlertService, useClass: MocAlertService},
                {provide: Router, useClass: MocRouter},
            ],
        }).overrideComponent(RegisterComponent, {
            set: {
                template: "<div></div>",
            }
        });

        const fixture = TestBed.createComponent(RegisterComponent);
        component = fixture.componentInstance;
    });

    it('should create', () => {
        component.ngOnInit();
        expect(component).toBeDefined();
    });
});
