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
import { NavigationComponent } from './components/navigation/navigation';
import { ChangeLanguageComponent } from './components/change-language/change-language';
import { ContactsComponent } from './components/contacts/contacts.component';
import { HomeComponent } from './components/home/home.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { FeedbackModule } from './components/feedback/feedback.module';
import { environment } from '../environments/environment';
import { LoginFormComponent } from './share/forms/login-form/login-form.component';
import { RegisterComponent } from './components/register/register.component';
import { AlertComponent } from './share/components/alert/alert.component';
import { LoginPageComponent } from './login/containers/login-page.component';
import { LoginComponent } from './login/components/login.component';

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
    ],
    providers: [AuthGuard],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
