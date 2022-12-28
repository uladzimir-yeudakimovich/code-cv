import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { appReducer } from './store/app.reducer';
import { AppEffects } from './store';
import { AppConfigService } from './config/app-config.service';

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
    providers: [AppConfigService],
    bootstrap: []
})
export class CoreModule {}
