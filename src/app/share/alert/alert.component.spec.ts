import { TestBed } from '@angular/core/testing';
import { AlertService } from 'src/app/services/alert.service';
import { MocAlertService } from 'src/app/testing/mock-service.spec';
import { AlertComponent } from './alert.component';

describe('AlertComponent', () => {
    let component: AlertComponent;

    beforeEach(async () => {
        TestBed.configureTestingModule({
            declarations: [AlertComponent],
            imports: [],
            providers: [
                {provide: AlertService, useClass: MocAlertService},
            ],
        }).overrideComponent(AlertComponent, {
            set: {
                template: '<div></div>'
            },
        });
        const fixture = TestBed.createComponent(AlertComponent);
        component = fixture.componentInstance;
    });

    it('should create', () => {
        component.ngOnInit();
        expect(component).toBeDefined();
    });
});
