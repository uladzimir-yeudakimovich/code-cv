import { Injectable, Type } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { select, Store } from '@ngrx/store';
import stripJsonComments from 'strip-json-comments';
import { AppConfig } from './app-config';
import { AppActions, AppSelectors } from '../store';
import { environment } from '../../../environments/environment';

@Injectable()
export class AppConfigService {

    constructor(private http: HttpClient, private store: Store<any>) {}

    loadAppConfig() {
        return this.http.get(environment.configuration, {responseType: 'text'})
            .pipe(map(appConfig => JSON.parse(stripJsonComments(appConfig))))
            .toPromise()
            .then((appConfig: AppConfig) => this.store.dispatch(new AppActions.LoadAppConfig(appConfig)));
    }

    getAppConfig(): Observable<any> {
        return this.store.pipe(
            select(AppSelectors.selectAppConfig),
            filter(appConfig => !!appConfig),
        );
    }
}
