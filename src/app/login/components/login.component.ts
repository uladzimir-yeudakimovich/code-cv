import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnInit {
    @Input() loading: boolean;

    @Output() submit: EventEmitter<any> = new EventEmitter();

    form: FormGroup;

    constructor(public formBuilder: FormBuilder) {}

    ngOnInit(): void {
        this.createFormGroup();
    }

    createFormGroup(): void {
        this.form = this.formBuilder.group({
            credentials: [null, [Validators.required]],
        });
    }

    onSubmit(): void {
        if (this.form.invalid) {
            return;
        }
        this.submit.emit(this.form.value);
    }
}
