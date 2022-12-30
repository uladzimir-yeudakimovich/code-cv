import { inject, TestBed, waitForAsync } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { cloneDeep, isEqual, isFunction } from 'lodash';
import { of } from 'rxjs';
import { MockLocalStorageService } from '@testing/mock-service.spec';
import { mockAppConfig } from '@testing/mock-data.spec';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { AppConfigService } from './app-config.service';
import { TypedJSON } from 'typedjson';
import { AppConfig } from './app-config';
import { AppActions } from '@core/store';

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
        let serializer;
        let appConfig;
        let serializedAppConfig;
        const configsEqual = (config, compareToConfig) => Object.entries(config).every(([key, value]) => {
            if (isFunction(value)) {
                return isFunction(compareToConfig[key]);
            } else {
                return isEqual(value, compareToConfig[key]);
            }
        });

        beforeEach(() => {
            serializer = new TypedJSON(AppConfig);
            appConfig = cloneDeep(mockAppConfig);
            serializedAppConfig = serializer.parse(appConfig);
            spyOn(service.http, 'get').and.returnValue(of(JSON.stringify(appConfig)));
        });

        it('should call to get the app config from the assets folder', () => {
            service.loadAppConfig();

            expect(service.http.get).toHaveBeenCalledWith('/assets/config/app-config.json', {responseType: 'text'});
        });

        it('should populate the loaded app config', waitForAsync(() => {
            service.loadAppConfig().then(() => {
                expect(configsEqual(service.loadAppConfig, serializedAppConfig)).toEqual(true);
            });
        }));
    });
});
