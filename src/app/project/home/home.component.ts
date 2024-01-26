import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { LanguageService } from '../../services/language.service';
import { InformationResponse, Info, Competence } from '../../shared/models/models';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
    // education: Info[];
    // experience: Info[];
    // technology: Competence[];
    general: Info;

    constructor(
        private dataService: DataService,
        private languageService: LanguageService,
    ) {}

    ngOnInit() {
        this.dataService.getInformation().subscribe((response: InformationResponse) => {
            // this.technology = response.technology;
            this.languageService.currentLang.subscribe((lang: string) => {
                this.general = response.general[lang];
                // this.education = response.education.map(el => el[lang]);
                // this.experience = response.experience.map(el => el[lang]);
            });
        });
    }
}
