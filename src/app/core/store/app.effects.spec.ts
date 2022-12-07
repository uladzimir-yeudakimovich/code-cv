import { TestBed, waitForAsync } from '@angular/core/testing';
import { Actions } from '@ngrx/effects';
import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { of, ReplaySubject } from 'rxjs';
import { AppEffects } from './app.effects';
import * as actions from './app.action';
import { DataService } from '../../services/data.service';
import { MockDataService } from '../../testing/mock-service.spec';
import { mockInformation } from '../../testing/mock-data.spec';

describe('AppEffects', () => {
    let effects;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            imports: [],
            providers: [
                AppEffects,
                provideMockStore({
                    initialState: {},
                }),
                provideMockActions(() => new Actions()),
                {provide: DataService, useClass: MockDataService},
            ],
        });

        effects = TestBed.inject(AppEffects);
        effects.actions$ = new ReplaySubject(1);
    }));

    describe('loadGeneralInformation$', () => {
        it('should dispatch load general information', waitForAsync(() => {
            spyOn(effects.dataService, 'getInformation').and.returnValue(of(mockInformation));

            const expectedAction = new actions.LoadInformationSuccess(mockInformation);

            effects.actions$.next(new actions.LoadInformation());
            effects.loadGeneralInformation$.subscribe(action => {
                expect(action).toEqual(expectedAction);
                expect(effects.dataService.getInformation).toHaveBeenCalled();
            });
        }));
    });
});
