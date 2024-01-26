import { Component, OnInit } from '@angular/core';
import { throwError } from 'rxjs';

import { MessageService } from '../../../services/message.service';
import { Feedback } from '../../../shared/models/models';

@Component({
    selector: 'app-messages',
    templateUrl: './messages.component.html',
    styleUrls: ['./messages.component.scss'],
})
export class MessagesComponent implements OnInit {
    feedbacks: Feedback[];

    constructor(private messageService: MessageService) { }

    ngOnInit() {
        this.messageService.getMessages().subscribe(
            (messages: Array<Feedback>) => this.feedbacks = messages,
            error => throwError('Error fetching messages:', error)
        );
    }
}
