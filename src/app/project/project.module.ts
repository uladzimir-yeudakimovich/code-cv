import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { ProjectsComponent } from '../project/projects/projects.component';
import { SharedModule } from '../shared/shared.module';
import { ContactsComponent } from './contacts/contacts.component';
import { HomeComponent } from './home/home.component';
import { FeedbackModule } from './feedback/feedback.module';
import { ImageSliderComponent } from './image-slider/image-slider.component';

@NgModule({
    declarations: [
        ContactsComponent,
        HomeComponent,
        ProjectsComponent,
        ImageSliderComponent,
    ],
    imports: [
        CommonModule,
        TranslateModule,
        ReactiveFormsModule,
        SharedModule,
        FeedbackModule,
    ],
    providers: [],
    bootstrap: [],
})
export class ProjectModule {}
