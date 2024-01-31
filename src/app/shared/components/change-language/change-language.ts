import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { LanguageService } from '../../../services/language.service';

@Component({
    selector: 'change-language',
    templateUrl: './change-language.html',
    styleUrls: ['./change-language.scss'],
})
export class ChangeLanguageComponent implements OnInit {
    language: string;

    constructor(private translate: TranslateService, public languageService: LanguageService) { }

    ngOnInit() {
        this.languageService.currentLang.subscribe(lang => {
            this.translate.setDefaultLang(lang);
            this.language = lang;
        });
    }

    switchLanguage(event): void {
        this.language = event.currentTarget.value;
        this.languageService.setLanguage(this.language);

        (<any>window).dataLayer.push({
            eventCategory: 'changeLanguage',
            eventLabel: 'click',
            eventAction: 'userLanguage',
            eventValue: this.language,
        });
    }
}
