import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { AppConfigService } from '../core/config/app-config.service';
import { JwtService } from '../core/services/jwt.service';
import { Feedback } from '../shared/models/models';

const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'SkipAuthorization': 'true',
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

    getMessages() {
        return this.http.get(`${this.baseFirebaseUrl}/messages.json`, { headers });
    }

    updateMessage(message: Feedback) {
        const { username } = this.jwtService.getUser();
        message.time = new Date();
        message.name = username;
        this.messages.push(message);

        return this.http.put(
            `${this.baseFirebaseUrl}/messages.json`,
            this.messages,
            { headers }
        );
    }
}
