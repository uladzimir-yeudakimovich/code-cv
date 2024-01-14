import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { InformationResponse } from '../shared/models/models';
import { AppConfigService } from '../core/config/app-config.service';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'SkipAuthorization': 'true',
    }),
};

@Injectable({
    providedIn: 'root',
})
export class DataService {
    baseFirebaseUrl: string;

    constructor(private http: HttpClient, appConfigService: AppConfigService) {
        appConfigService.getAppConfig().subscribe(appConfig => {
            this.baseFirebaseUrl = appConfig.serviceConfig.baseFirebaseUrl.value;
        });
    }

    getInformation(): Observable<InformationResponse> {
        return this.http.get<InformationResponse>(`${this.baseFirebaseUrl}/information.json`, httpOptions);
    }

    getProjects() {
        return this.http.get(`${this.baseFirebaseUrl}/projects.json`, httpOptions);
    }
}
