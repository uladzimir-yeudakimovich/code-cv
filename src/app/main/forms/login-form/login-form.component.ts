import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { FormGroup, Validators, NG_VALUE_ACCESSOR, NG_VALIDATORS, ControlValueAccessor, Validator,
    ValidationErrors, FormBuilder } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CVAUtils } from 'src/app/share/utils/cva.utils';

@Component({
    selector: 'login-form',
    templateUrl: './login-form.component.html',
    styleUrls: ['../../../styles/styles.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            multi: true,
            useExisting: LoginFormComponent,
        },
        {
            provide: NG_VALIDATORS,
            multi: true,
            useExisting: LoginFormComponent,
        }
    ]
})
export class LoginFormComponent implements ControlValueAccessor, Validator, OnDestroy {
    loading: boolean;
    hide: boolean = true;
    onTouched: Function;
    unsubscribe = new Subject<void>();

    form: FormGroup = this.formBuilder.group({
        username: [null, [Validators.required]],
        password: [null, [Validators.required, Validators.minLength(6)]],
    });

    constructor(public formBuilder: FormBuilder) {}

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
