import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['../../../styles/styles.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
    @Input() loading: boolean;

    @Output() save: EventEmitter<any> = new EventEmitter();

    form: FormGroup = this.formBuilder.group({
        credentials: [null, [Validators.required]],
    });

    constructor(private formBuilder: FormBuilder) {}

    onSubmit(): void {
        if (this.form.invalid) {
            return;
        }
        this.save.emit(this.form.value.credentials);
    }
}
