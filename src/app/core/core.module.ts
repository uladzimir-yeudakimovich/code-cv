import { APP_INITIALIZER, NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { appReducer } from './store/app.reducer';
import { AppEffects } from './store';
import { AppConfigService } from './config/app-config.service';
import { AuthenticationInterceptor } from './interceptors/authentication.interceptor';
import { initializeApp } from './initialize/app-init';

@NgModule({
    declarations: [
    ],
    exports: [
    ],
    imports: [
        StoreModule.forRoot({appReducer}),
        StoreModule.forFeature('app', appReducer),
        EffectsModule.forRoot([AppEffects]),
        EffectsModule.forFeature([AppEffects]),
    ],
    providers: [
        AppConfigService,
        { provide: APP_INITIALIZER, useFactory: initializeApp, deps: [AppConfigService], multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: AuthenticationInterceptor, multi: true },
    ],
    bootstrap: [],
})
export class CoreModule {}
