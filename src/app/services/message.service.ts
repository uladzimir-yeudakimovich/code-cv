import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { AppConfigService } from '../core/config/app-config.service';
import { JwtService } from '../core/services/jwt.service';
import { Feedback } from '../shared/models/models';

const headers = new HttpHeaders({
    'Content-Type': 'application/json',
});

@Injectable({
    providedIn: 'root',
})
export class MessageService {
    private messages: Feedback[];
    private baseUrl: string;

    constructor(
        private appConfigService: AppConfigService,
        private http: HttpClient,
        private jwtService: JwtService
    ) {
        appConfigService.getAppConfig().subscribe(appConfig => {
            this.baseUrl = appConfig.serviceConfig.baseUrl.value;
        });
    }

    getMessages(): Observable<Array<Feedback>> {
        return this.http.get<Array<Feedback>>(`${this.baseUrl}/feedbacks`, { headers })
            .pipe(
                tap(messages => this.messages = messages),
                catchError(error => throwError('Error fetching messages:', error))
            );
    }

    sendMessage(message: Feedback) {
        const { login } = this.jwtService.getUser();

        return this.http.post(
            `${this.baseUrl}/feedbacks`,
            { ...message, name: login },
            { headers }
        ).subscribe(
            (res: Feedback) => this.messages.push(res)
        );
    }
}
