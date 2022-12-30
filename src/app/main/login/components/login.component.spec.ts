import { TestBed } from '@angular/core/testing';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
    let component;

    beforeEach(async () => {
        TestBed.configureTestingModule({
            declarations: [LoginComponent],
            imports: [],
            providers: [
                {provide: FormBuilder},
            ],
        }).overrideComponent(LoginComponent, {
            set: {
                template: '<div></div>',
            },
        });

        const fixture = TestBed.createComponent(LoginComponent);
        component = fixture.componentInstance;
    });

    it('should create form', () => {
        expect(component).toBeTruthy();
    });

    describe('onSubmit()', () => {
        it('should not emit submit event', () => {
            spyOn(component.save, 'emit').and.stub();
            component.onSubmit();
            expect(component.save.emit).not.toHaveBeenCalled();
        });


        it('should emit submit event', () => {
            spyOn(component.save, 'emit');
            component.form.controls['credentials'].setValue({ userName: 'testName', password: 'testPassword'});
            component.onSubmit();
            expect(component.save.emit).toHaveBeenCalled();
        });
    });
});
