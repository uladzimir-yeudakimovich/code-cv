import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { ServiceWorkerModule } from '@angular/service-worker';

import { AppRoutingModule } from './app-routing.module';
import { AuthGuard } from './services/auth-guard.service';
import { AppComponent } from './app.component';
import { NavigationComponent } from './share/components/navigation/navigation';
import { ChangeLanguageComponent } from './share/components/change-language/change-language';
import { ContactsComponent } from './contacts/contacts.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { FeedbackModule } from './feedback/feedback.module';
import { environment } from '../environments/environment';
import { LoginFormComponent } from './share/forms/login-form/login-form.component';
import { RegisterComponent } from './main/register/components/register.component';
import { AlertComponent } from './share/components/alert/alert.component';
import { LoginPageComponent } from './main/login/containers/login-page.component';
import { LoginComponent } from './main/login/components/login.component';
import { RegisterFormComponent } from './share/forms/register-form/register-form.component';
import { RegisterPageComponent } from './main/register/containers/register-page.component';

export function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}

@NgModule({
    imports: [
        BrowserModule,
        HttpClientModule,
        ReactiveFormsModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: (createTranslateLoader),
                deps: [HttpClient]
            }
        }),
        CarouselModule,
        BrowserAnimationsModule,
        MaterialModule,
        AppRoutingModule,
        FeedbackModule,
        ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
    ],
    declarations: [
        AppComponent,
        NavigationComponent,
        ChangeLanguageComponent,
        ContactsComponent,
        HomeComponent,
        ProjectsComponent,
        LoginFormComponent,
        LoginPageComponent,
        RegisterComponent,
        AlertComponent,
        LoginComponent,
        RegisterFormComponent,
        RegisterPageComponent,
    ],
    providers: [AuthGuard],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
