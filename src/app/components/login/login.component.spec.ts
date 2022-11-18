import {TestBed} from '@angular/core/testing';
import {LoginComponent} from './login.component';

describe('LoginComponent', () => {
    let component;

    beforeEach(async () => {
        TestBed.configureTestingModule({
            declarations: [LoginComponent],
            imports: [],
            providers: [],
        }).overrideComponent(LoginComponent, {
            set: {
                template: "<div></div>",
            }
        });

        const fixture = TestBed.createComponent(LoginComponent);
        component = fixture.componentInstance;
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
