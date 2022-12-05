import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AppState } from './app.reducer';

export const selectAppState = createFeatureSelector<AppState>('app');
export const selectInformation = createSelector(selectAppState, state => state.generalInfo);
export const selectInformationLoadInProgress = createSelector(selectAppState, state => state.changeIndicator);
