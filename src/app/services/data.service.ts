import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { InformationResponse, Project } from '../shared/models/models';
import { AppConfigService } from '../core/config/app-config.service';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
    }),
};

@Injectable({
    providedIn: 'root',
})
export class DataService {
    private baseFirebaseUrl: string;

    constructor(private http: HttpClient, appConfigService: AppConfigService) {
        appConfigService.getAppConfig().subscribe(appConfig => {
            this.baseFirebaseUrl = appConfig.serviceConfig.baseFirebaseUrl.value;
        });
    }

    getInformation(): Observable<InformationResponse> {
        return this.http.get<InformationResponse>(`${this.baseFirebaseUrl}/information`, httpOptions);
    }

    getProjects(): Observable<Array<Project>> {
        return this.http.get<Array<Project>>(`${this.baseFirebaseUrl}/projects`, httpOptions);
    }
}
