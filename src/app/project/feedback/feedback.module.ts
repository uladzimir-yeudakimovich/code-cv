import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '../../share/shared.module';

import { FeedbackComponent } from './feedback.component';
import { MessagesComponent } from './messages/messages.component';
import { RegisterFormComponent } from './register-form/register-form.component';

@NgModule({
    imports: [
        SharedModule,
        TranslateModule,
        CommonModule,
    ],
    // exports: [
    //     FeedbackComponent
    // ],
    declarations: [
        FeedbackComponent,
        MessagesComponent,
        RegisterFormComponent,
    ]
})
export class FeedbackModule {}
