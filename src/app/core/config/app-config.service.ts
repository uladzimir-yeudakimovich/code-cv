import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { select, Store } from '@ngrx/store';
import { AppSelectors } from '../store';

@Injectable()
export class AppConfigService {

    constructor(private http: HttpClient, private store: Store<any>) {}

    getAppConfig(): Observable<any> {
        return this.store.pipe(
            select(AppSelectors.selectAppConfig),
            filter(appConfig => !!appConfig),
        )
    }
}
