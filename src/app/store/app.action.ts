import { HttpErrorResponse } from '@angular/common/http';
import { Action } from '@ngrx/store';
import { InformationResponse } from '../share/models/models';


export enum ActionTypes {
    LoadGeneralInformation = 'Load General Information',
    LoadGeneralInformationSuccess = 'Load General Information Success',
    LoadGeneralInformationFailure = 'Load General Information Failure',
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
    | LoadInformation
    | LoadInformationSuccess
    | LoadInformationFailure;
