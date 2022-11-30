import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { AlertComponent } from './components/alert/alert.component';
import { ChangeLanguageComponent } from './components/change-language/change-language';
import { MaterialModule } from './material.module';
import { AuthGuard } from '../services/auth-guard.service';

@NgModule({
    declarations: [
        AlertComponent,
        ChangeLanguageComponent,
    ],
    imports: [
        CommonModule,
        TranslateModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
    ],
    exports: [
        AlertComponent,
        CommonModule,
        TranslateModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
        ChangeLanguageComponent,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    providers: [AuthGuard],
})
export class SharedModule {}
