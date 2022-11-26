import { TestBed } from '@angular/core/testing';
import { FormBuilder, Validators } from '@angular/forms';
import { RegisterComponent } from './register.component';

describe('RegisterComponent', () => {
    let component;

    beforeEach(async () => {
        TestBed.configureTestingModule({
            declarations: [RegisterComponent],
            imports: [],
            providers: [
                {provide: FormBuilder},
            ],
        }).overrideComponent(RegisterComponent, {
            set: {
                template: '<div></div>',
            }
        });

        const fixture = TestBed.createComponent(RegisterComponent);
        component = fixture.componentInstance;
    });

    it('should create form', () => {
        expect(component).toBeTruthy();
    });

    describe('onSubmit()', () => {
        it('should not emit submit event', () => {
            spyOn(component.submit, 'emit').and.stub();
            component.onSubmit();
            expect(component.submit.emit).not.toHaveBeenCalled();
        });


        it('should emit submit event', () => {
            spyOn(component.submit, 'emit');
            component.form.controls['credentials'].setValue({ userName: 'testName', email: 'testEmail', password: 'testPassword'});
            component.onSubmit();
            expect(component.submit.emit).toHaveBeenCalled();
        });
    });
});
