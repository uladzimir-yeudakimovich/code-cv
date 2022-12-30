import { TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { CVAUtils } from 'src/app/share/utils/cva.utils';
import { RegisterFormComponent } from './register-form.component';

describe('LoginComponent', () => {
    let component;

    beforeEach(async () => {
        TestBed.configureTestingModule({
            declarations: [RegisterFormComponent],
            imports: [],
            providers: [
                {provide: FormBuilder},
            ],
        }).overrideComponent(RegisterFormComponent, {
            set: {
                template: '<div></div>',
            },
        });

        const fixture = TestBed.createComponent(RegisterFormComponent);
        component = fixture.componentInstance;
    });

    it('should create form', () => {
        expect(component).toBeTruthy();
    });

    describe('writeValue', () => {
        it('should fill the form with provided data', () => {
            const mockValue = {
                username: 'testName',
                email: 'testEmail',
                password: 'testPassword',
            };

            component.writeValue(mockValue);

            expect(component.form.value).toEqual(mockValue);
        });
    });

    describe('registerOnTouched', () => {
        it('should set onChange function', () => {
            const fn = () => 0;

            component.registerOnTouched(fn);

            expect(component.onTouched).toEqual(fn);
        });
    });

    describe('validate', () => {
        it('should call utils', () => {
            component.form.controls.username.setValue('testName');
            spyOn(CVAUtils, 'getValidationErrors');

            component.validate();

            expect(CVAUtils.getValidationErrors).toHaveBeenCalledWith(component.form);
        });
    });
});
