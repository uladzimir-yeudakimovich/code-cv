import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
    selector: 'register',
    templateUrl: './register.component.html',
    styleUrls: ['../../../styles/styles.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterComponent {
    @Input() loading: boolean;

    @Output() submit: EventEmitter<any> = new EventEmitter();

    form: FormGroup = this.formBuilder.group({
        credentials: [null, [Validators.required]],
    });

    constructor(public formBuilder: FormBuilder) {}

    onSubmit(): void {
        if (this.form.invalid) {
            return;
        }
        this.submit.emit(this.form.value.credentials);
    }
}
