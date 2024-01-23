import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { FormGroup, Validators, NG_VALUE_ACCESSOR, NG_VALIDATORS, ControlValueAccessor, Validator,
         ValidationErrors, FormBuilder } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CVAUtils } from 'src/app/shared/utils/cva.utils';

@Component({
    selector: 'register-form',
    templateUrl: './register-form.component.html',
    styleUrls: ['../../../styles/styles.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            multi: true,
            useExisting: RegisterFormComponent,
        },
        {
            provide: NG_VALIDATORS,
            multi: true,
            useExisting: RegisterFormComponent,
        },
    ],
})
export class RegisterFormComponent implements ControlValueAccessor, Validator, OnDestroy {
    loading: boolean;
    hide: boolean = true;
    onTouched: Function;
    unsubscribe = new Subject<void>();

    form: FormGroup = this.formBuilder.group({
        username: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
        email: [null, [Validators.required, Validators.email]],
        password: [null, [Validators.required, Validators.minLength(6)]],
    });

    constructor(private formBuilder: FormBuilder) {}

    ngOnDestroy(): void {
        if (this.form.untouched) {
            this.form.setValue(this.form.value);
        }
        this.unsubscribe.next();
        this.unsubscribe.complete();
    }

    writeValue(obj: any): void {
        if (obj) {
            this.form.setValue(obj, {emitEvent: false});
            this.form.markAllAsTouched();
        }
    }

    registerOnChange(fn: any): void {
        this.form.valueChanges.pipe(takeUntil(this.unsubscribe)).subscribe(fn);
    }

    registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }

    validate(): ValidationErrors {
        return CVAUtils.getValidationErrors(this.form);
    }
}
