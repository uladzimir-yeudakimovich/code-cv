import { Injectable, Type } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { cloneDeep } from 'lodash';
import { select, Store } from '@ngrx/store';
import stripJsonComments from 'strip-json-comments';
import { TypedJSON } from 'typedjson';
import { AppConfig } from './app-config';
import { AppSelectors } from '../store';

@Injectable()
export class AppConfigService {
    private loadedAppConfig: AppConfig;

    constructor(private http: HttpClient, private store: Store<any>) {}

    loadAppConfig() {
        return this.http.get('/assets/config/app-config.json', {responseType: 'text'})
            .pipe(map(appConfig => JSON.parse(stripJsonComments(appConfig))))
            .toPromise()
            .then((appConfig: AppConfig) => {
                this.loadedAppConfig = this.serializeAppConfig(cloneDeep(appConfig), AppConfig);
            });
    }

    getAppConfig(): Observable<any> {
        return this.store.pipe(
            select(AppSelectors.selectAppConfig),
            filter(appConfig => !!appConfig),
        );
    }

    private serializeAppConfig<T>(appConfig: T, classRef: Type<T>): T {
        const serializer = new TypedJSON(classRef);
        return serializer.parse(appConfig);
    }
}
