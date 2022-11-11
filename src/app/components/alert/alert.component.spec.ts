import { TestBed } from '@angular/core/testing';

import { AlertComponent } from './alert.component';

describe('AlertComponent', () => {
    let component: AlertComponent;

    beforeEach(async () => {
        TestBed.configureTestingModule({
            declarations: [ AlertComponent ]
        }).overrideComponent(AlertComponent, {
            set: {
                template: '<div></div>'
            },
        });
        const fixture = TestBed.createComponent(AlertComponent);
        component = fixture.componentInstance;
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
