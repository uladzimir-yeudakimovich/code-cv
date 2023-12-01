import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatLegacyMenuModule as MatMenuModule } from '@angular/material/legacy-menu';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlertComponent } from './components/alert/alert.component';
import { ChangeLanguageComponent } from './components/change-language/change-language';
import { AuthGuard } from '../services/auth-guard.service';
import { MaterialModule } from '../material.module';

@NgModule({
    declarations: [
        AlertComponent,
        ChangeLanguageComponent,
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
    providers: [AuthGuard],
})
export class SharedModule {}
