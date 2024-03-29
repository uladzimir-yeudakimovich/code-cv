import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-title',
    template: `
        <mat-card class="mat-mdc-card" appearance="outlined">
          <mat-card-content class="mat-mdc-card-content">{{ title }}</mat-card-content>
        </mat-card>
    `,
    styleUrls: ['../../../styles/styles.scss'],
})
export class TitleComponent {
    @Input() title: string = 'Page not found! 😕';
}
