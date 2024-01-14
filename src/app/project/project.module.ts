import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ProjectsComponent } from '../project/projects/projects.component';
import { SharedModule } from '../shared/shared.module';
import { ContactsComponent } from './contacts/contacts.component';
import { HomeComponent } from './home/home.component';
import { FeedbackModule } from './feedback/feedback.module';

@NgModule({
    declarations: [
        ContactsComponent,
        HomeComponent,
        ProjectsComponent,
    ],
    imports: [
        CommonModule,
        TranslateModule,
        ReactiveFormsModule,
        CarouselModule,
        SharedModule,
        FeedbackModule,
    ],
    providers: [],
    bootstrap: [],
})
export class ProjectModule {}
