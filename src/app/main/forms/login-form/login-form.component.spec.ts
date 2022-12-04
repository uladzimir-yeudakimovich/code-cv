import { TestBed } from '@angular/core/testing';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginFormComponent } from './login-form.component';

describe('LoginComponent', () => {
    let component;

    beforeEach(async () => {
        TestBed.configureTestingModule({
            declarations: [LoginFormComponent],
            imports: [],
            providers: [
                {provide: FormBuilder},
            ],
        }).overrideComponent(LoginFormComponent, {
            set: {
                template: '<div></div>',
            }
        });

        const fixture = TestBed.createComponent(LoginFormComponent);
        component = fixture.componentInstance;
    });

    it('should create form', () => {
        expect(component).toBeTruthy();
    });
});
