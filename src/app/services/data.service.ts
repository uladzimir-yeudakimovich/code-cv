import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InformationResponse } from '../share/models/models';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class DataService {
    private databaseURL: string = 'https://portfolio-57f5d.firebaseio.com';

    constructor(private http: HttpClient) {}

    getInformation(): Observable<InformationResponse> {
        return this.http.get<InformationResponse>(`${this.databaseURL}/information.json`);
    }

    getProjects() {
        return this.http.get(`${this.databaseURL}/projects.json`);
    }
}
