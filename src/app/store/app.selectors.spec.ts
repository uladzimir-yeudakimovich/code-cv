import { AppState } from './app.reducer';
import * as selectors from './app.selectors';
import { mockInformation } from '../testing/mock-data.spec';

describe('app selectors', () => {

    describe('generalInfo', () => {
        it('should return generalInfo sets', () => {
            const appState: AppState = {
                generalInfo: mockInformation,
                changeIndicator: {
                    inProgress: [],
                    successful: [],
                    failed: [],
                },
            };

            expect(selectors.selectInformation.projector(appState)).toEqual(mockInformation);
        });

        it('should get in progress status if action type in progress', () => {
            const actionTypesInprogress = ['Load data', 'Update data'];
            const changeIndicatorState = {
                inProgress: actionTypesInprogress,
                successful: [],
                failed: [],
            };

            expect(selectors.selectInformationLoadInProgress(actionTypesInprogress).projector(changeIndicatorState)).toBe(true);
        });

        it('should get in progress status if action type success', () => {
            const actionTypesSuccess = ['Load data success', 'Update data success'];
            const changeIndicatorState = {
                inProgress: [],
                successful: actionTypesSuccess,
                failed: [],
            };

            expect(selectors.selectInformationLoadSuccess(actionTypesSuccess).projector(changeIndicatorState)).toBe(true);
        });

        it('should get in progress status if action type failed', () => {
            const actionTypesFailed = ['Load data failed', 'Update data failed'];
            const changeIndicatorState = {
                inProgress: [],
                successful: [],
                failed: actionTypesFailed,
            };

            expect(selectors.selectInformationLoadFailed(actionTypesFailed).projector(changeIndicatorState)).toBe(true);
        });
    });
});
