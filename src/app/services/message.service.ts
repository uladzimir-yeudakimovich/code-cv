import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { AppConfigService } from '../core/config/app-config.service';
import { JwtService } from '../core/services/jwt.service';
import { Feedback } from '../shared/models/models';
import { Observable } from 'rxjs';

const headers = new HttpHeaders({
    'Content-Type': 'application/json',
});

@Injectable({
    providedIn: 'root',
})
export class MessageService {
    baseFirebaseUrl: string;
    messages: Feedback[];

    constructor(appConfigService: AppConfigService, private http: HttpClient, private jwtService: JwtService) {
        appConfigService.getAppConfig().subscribe(appConfig => {
            this.baseFirebaseUrl = appConfig.serviceConfig.baseFirebaseUrl.value;
        });
    }

    getMessages(): Observable<Array<Feedback>> {
        return this.http.get<Array<Feedback>>(`${this.baseFirebaseUrl}/feedbacks`, { headers });
    }

    updateMessage(message: Feedback) {
        const { login } = this.jwtService.getUser();

        return this.http.post(
            `${this.baseFirebaseUrl}/feedbacks`,
            { ...message, name: login },
            { headers }
        ).subscribe(
            (res: Feedback) => this.messages.push(res)
        );
    }
}
