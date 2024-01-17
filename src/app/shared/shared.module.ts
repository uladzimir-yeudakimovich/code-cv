import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatLegacyMenuModule as MatMenuModule } from '@angular/material/legacy-menu';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlertComponent } from './components/alert/alert.component';
import { ChangeLanguageComponent } from './components/change-language/change-language';
import { MaterialModule } from '../material.module';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
    declarations: [
        AlertComponent,
        ChangeLanguageComponent,
        NotFoundComponent,
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
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    providers: [],
})
export class SharedModule {}
