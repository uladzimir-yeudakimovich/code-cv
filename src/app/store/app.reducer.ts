import { InformationResponse } from '../share/models/models';
import * as AppActions from './app.action';

export interface AppState {
    generalInfo: InformationResponse;
    changeIndicator: {
        inProgress: string[];
        successful: string[];
        failed: string[];
    };
};

export const appInitialState = {
    generalInfo: null,
    changeIndicator: {
        inProgress: [],
        successful: [],
        failed: [],
    },
};

export function appReducer(state = appInitialState, action: AppActions.Actions): AppState {
    switch (action.type) {
        case AppActions.ActionTypes.LoadGeneralInformation:
            return appInitialState;
        case AppActions.ActionTypes.LoadGeneralInformationSuccess:
            return {...state, generalInfo: action.info};
        default:
            return state;
    }
};
