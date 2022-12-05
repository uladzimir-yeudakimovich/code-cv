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
    });
});
