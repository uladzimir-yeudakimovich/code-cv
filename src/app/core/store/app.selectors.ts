import { createSelector, createFeatureSelector } from '@ngrx/store';
import { some, includes } from 'lodash';
import { AppState } from './app.reducer';

export const selectAppState = createFeatureSelector<AppState>('app');
export const selectInformation = createSelector(selectAppState, state => state.generalInfo);

export const selectAppConfig = createSelector(selectAppState, state => state.appConfig);

const selectChangeIndicatorState = createSelector(selectAppState, state => state.changeIndicator);
export const selectInformationLoadInProgress = (actionTypes: string[]) => createSelector(
    selectChangeIndicatorState,
    state => some(actionTypes, (actionType) => includes(state.inProgress, actionType)),
);
export const selectInformationLoadSuccess = (actionTypes: string[]) => createSelector(
    selectChangeIndicatorState,
    state => some(actionTypes, (actionType) => includes(state.successful, actionType)),
);
export const selectInformationLoadFailed = (actionTypes: string[]) => createSelector(
    selectChangeIndicatorState,
    state => some(actionTypes, (actionType) => includes(state.failed, actionType)),
);
