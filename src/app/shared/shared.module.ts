import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlertComponent } from './components/alert/alert.component';
import { ChangeLanguageComponent } from './components/change-language/change-language';
import { MaterialModule } from '../material.module';
import { TitleComponent } from './components/app-title/app-title.component';

@NgModule({
    declarations: [
        AlertComponent,
        ChangeLanguageComponent,
        TitleComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatMenuModule,
    ],
    exports: [
        AlertComponent,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
        ChangeLanguageComponent,
        MatMenuModule,
        TitleComponent,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    providers: [],
})
export class SharedModule {}
