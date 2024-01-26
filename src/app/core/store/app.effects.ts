import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import * as actions from './app.action';
import { DataService } from '../../services/data.service';
import { InformationResponse } from '../../shared/models/models';
import { JwtService } from '@core/services/jwt.service';

@Injectable()
export class AppEffects {
    loadGeneralInformation$: Observable<Action> = createEffect(() => this.actions$.pipe(
        ofType(actions.ActionTypes.LoadGeneralInformation),
        switchMap((action: actions.LoadInformation) => this.dataService.getInformation().pipe(
            map((info: InformationResponse) => new actions.LoadInformationSuccess(info)),
            catchError((error: HttpErrorResponse) => of(new actions.LoadInformationFailure(error))),
        )),
    ));

    loadRefreshSession$: Observable<Action> = createEffect(() => this.actions$.pipe(
        ofType(actions.ActionTypes.LoadRefreshSession),
        switchMap(() =>
            this.jwtService.refreshSession().pipe(
                map((response) => new actions.LoadRefreshSessionSuccess(response.accessToken)),
                catchError((error: HttpErrorResponse) => of(new actions.LoadRefreshSessionFailure(error)))
            )
        )),
    );

    constructor(
        private actions$: Actions,
        private dataService: DataService,
        private jwtService: JwtService,
    ) {}
}
