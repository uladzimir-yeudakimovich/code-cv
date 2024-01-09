import { inject, TestBed, waitForAsync } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { cloneDeep, isEqual, isFunction } from 'lodash';
import { of } from 'rxjs';
import { MockLocalStorageService } from '@testing/mock-service.spec';
import { mockAppConfig } from '@testing/mock-data.spec';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { AppConfigService } from './app-config.service';
import * as AppActions from '../store/app.action';

describe('AppConfigService', () => {
    let service;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [
                AppConfigService,
                provideMockStore(),
                {provide: LocalStorageService, useClass: MockLocalStorageService},
            ],
        });
    });

    beforeEach(inject([AppConfigService], (appConfigService: AppConfigService) => {
        service = appConfigService;
    }));

    describe('loadAppConfig()', () => {
        let appConfig;
        const configsEqual = (config, compareToConfig) => Object.entries(config).every(([key, value]) => {
            if (isFunction(value)) {
                return isFunction(compareToConfig[key]);
            } else {
                return isEqual(value, compareToConfig[key]);
            }
        });

        beforeEach(() => {
            appConfig = cloneDeep(mockAppConfig);
            spyOn(service.http, 'get').and.returnValue(of(JSON.stringify(appConfig)));
        });

        it('should call to get the app config from the assets folder', () => {
            service.loadAppConfig();

            expect(service.http.get).toHaveBeenCalledWith('/assets/config/app-config-local.json', {responseType: 'text'});
        });

        it('should load app config and dispatch action', waitForAsync(() => {
            spyOn(service.store, 'dispatch');

            service.loadAppConfig().then(() => {
                expect(service.store.dispatch).toHaveBeenCalledWith(new AppActions.LoadAppConfig(appConfig));
            });
        }));
    });
});
