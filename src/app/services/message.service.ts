import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { TokenStorageService } from './token-storage.service';
import { Feedback } from '..//models/models';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  headers = new HttpHeaders({'Content-Type': 'application/json'});
  messages: Feedback[];

  constructor(private http: HttpClient, private tokenStorageService: TokenStorageService) { }

  getMessages() {
    return this.http.get('https://portfolio-57f5d.firebaseio.com/messages.json');
  }

  updateMessage(message: Feedback) {
    const { username } = this.tokenStorageService.getUser();
    message.time = new Date();
    message.name = username;
    this.messages.push(message);

    return this.http.put(
      'https://portfolio-57f5d.firebaseio.com/messages.json',
      this.messages,
      { headers: this.headers }
    );
  }
}
