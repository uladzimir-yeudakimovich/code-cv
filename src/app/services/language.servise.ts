import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class LanguageService {
  public lang = new BehaviorSubject<string>(
    localStorage['language'] ? localStorage['language'] : 'en'
  );
  currentLang = this.lang.asObservable();

  setLanguage(language: string) {
    localStorage['language'] = language;
    this.lang.next(language);
  }
}