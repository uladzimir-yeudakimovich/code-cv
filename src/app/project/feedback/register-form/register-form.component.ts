import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { MessageService } from '../../../services/message.service';

@Component({
    selector: 'app-register-form',
    templateUrl: './register-form.component.html',
    styleUrls: ['./register-form.component.scss'],
})
export class RegisterFormComponent implements OnInit {
    createMessageForm: FormGroup;

    constructor(private messageService: MessageService) { }

    get isRequired() {
        return this.createMessageForm.controls;
    }

    ngOnInit() {
        this.createMessageForm = new FormGroup({
            'message': new FormControl(null, [Validators.required, Validators.minLength(2)]),
        });
    }

    onSubmit() {
        this.messageService.sendMessage(this.createMessageForm.value);
        this.createMessageForm.reset();

        (<any>window).dataLayer.push({
            eventCategory: 'submit',
            eventLabel: 'click',
            eventAction: 'userMessage',
            eventValue: this.createMessageForm.value,
        });
    }
}
