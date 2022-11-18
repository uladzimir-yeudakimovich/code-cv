import {TestBed} from '@angular/core/testing';
import {RegisterComponent} from './register.component';

describe('RegisterComponent', () => {
    let component;

    beforeEach(async () => {
        TestBed.configureTestingModule({
            declarations: [RegisterComponent],
            imports: [],
            providers: [],
        }).overrideComponent(RegisterComponent, {
            set: {
                template: "<div></div>",
            }
        });

        const fixture = TestBed.createComponent(RegisterComponent);
        component = fixture.componentInstance;
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
