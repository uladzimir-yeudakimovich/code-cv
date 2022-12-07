import { InformationResponse } from '../../share/models/models';
import { AppConfig } from '../config/app-config';
import * as AppActions from './app.action';

export interface AppState {
    generalInfo: InformationResponse;
    appConfig: AppConfig;
    changeIndicator: {
        inProgress: string[];
        successful: string[];
        failed: string[];
    };
};

export const appInitialState = {
    generalInfo: null,
    appConfig: null,
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
        case AppActions.ActionTypes.LoadAppConfig:
            return {...state, appConfig: action.appConfig};
        case AppActions.ActionTypes.LoadGeneralInformationSuccess:
            return {...state, generalInfo: action.info};
        default:
            return state;
    }
};
