import { NgModule } from '@angular/core';
import { SharedModule } from '../share/shared.module';

import { FeedbackComponent } from './feedback.component';
import { MessagesComponent } from './messages/messages.component';
import { RegisterFormComponent } from './register-form/register-form.component';

@NgModule({
    imports: [
        SharedModule,
    ],
    exports: [
        FeedbackComponent
    ],
    declarations: [
        FeedbackComponent,
        MessagesComponent,
        RegisterFormComponent,
    ]
})
export class FeedbackModule {}
