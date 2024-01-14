import { HttpErrorResponse } from '@angular/common/http';
import { Action } from '@ngrx/store';
import { AppConfig } from '../config/app-config';
import { InformationResponse } from '../../shared/models/models';


export enum ActionTypes {
    LoadApplicationConfig = 'Load application config',
    LoadGeneralInformation = 'Load General Information',
    LoadGeneralInformationSuccess = 'Load General Information Success',
    LoadGeneralInformationFailure = 'Load General Information Failure',
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

export type Actions =
    | LoadAppConfig
    | LoadInformation
    | LoadInformationSuccess
    | LoadInformationFailure;
