import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { LanguageService } from '../../services/language.service';
import { Project } from '../../shared/models/models';

@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
    data: Project[];

    constructor(
        private dataService: DataService,
        private languageService: LanguageService
    ) { }

    ngOnInit() {
        this.dataService.getProjects().subscribe((response: Array<Project>) => {
            this.languageService.currentLang.subscribe((lang: string) => {
                this.data = response.map(el => {
                    el.description = el[lang];
                    return el;
                });
            });
        });
    }
}
