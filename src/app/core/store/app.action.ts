import { HttpErrorResponse } from '@angular/common/http';
import { Action } from '@ngrx/store';
import { AppConfig } from '../config/app-config';
import { InformationResponse } from '../../shared/models/models';


export enum ActionTypes {
    LoadApplicationConfig = '[App Config] Load application config',
    LoadGeneralInformation = '[General info] Load General Information',
    LoadGeneralInformationSuccess = '[General info] Load General Information Success',
    LoadGeneralInformationFailure = '[General info] Load General Information Failure',
    LoadRefreshSession = '[Auth] Load Refresh Session',
    LoadRefreshSessionSuccess = '[Auth] Load Refresh Session Success',
    LoadRefreshSessionFailure = '[Auth] Load Refresh Session Failure',
}

export class LoadAppConfig implements Action {
    readonly type = ActionTypes.LoadApplicationConfig;

    constructor(public appConfig: AppConfig) {}
}

export class LoadInformation implements Action {
    readonly type = ActionTypes.LoadGeneralInformation;
}

export class LoadInformationSuccess implements Action {
    readonly type = ActionTypes.LoadGeneralInformationSuccess;

    constructor(public info: InformationResponse) {}
}

export class LoadInformationFailure implements Action {
    readonly type = ActionTypes.LoadGeneralInformationFailure;

    constructor(public error: HttpErrorResponse) {}
}

export class LoadRefreshSession implements Action {
    readonly type = ActionTypes.LoadRefreshSession;
}

export class LoadRefreshSessionSuccess implements Action {
    readonly type = ActionTypes.LoadRefreshSessionSuccess;

    constructor(public accessToken: string) {}
}

export class LoadRefreshSessionFailure implements Action {
    readonly type = ActionTypes.LoadRefreshSessionFailure;

    constructor(public error: HttpErrorResponse) {}
}

export type Actions =
    | LoadAppConfig
    | LoadInformation
    | LoadInformationSuccess
    | LoadInformationFailure
    | LoadRefreshSession
    | LoadRefreshSessionSuccess
    | LoadRefreshSessionFailure;
