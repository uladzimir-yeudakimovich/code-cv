import { HttpErrorResponse } from '@angular/common/http';
import { appInitialState, appReducer } from './app.reducer';
import * as actions from './app.action';
import { mockInformation } from '../testing/mock-data.spec';

describe('appReducer', () => {
    it('should change current generalInfo state data', () => {
        const initialState = appInitialState;
        const result = appReducer(
            initialState,
            new actions.LoadInformationSuccess(mockInformation),
        );
        const expectedState = {
            ...initialState,
            generalInfo: mockInformation,
        };

        expect(result).toEqual(expectedState);
    });


    it('should catch HTTP error', () => {
        const error = new HttpErrorResponse({statusText: 'timeout'});
        const initialState = appInitialState;
        const result = appReducer(
            initialState,
            new actions.LoadInformationFailure(error),
        );
        const expectedState = initialState;

        expect(result).toEqual(expectedState);
    });
});
