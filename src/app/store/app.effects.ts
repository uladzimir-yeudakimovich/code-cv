import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import * as actions from './app.action';
import { DataService } from '../services/data.service';
import { InformationResponse } from '../share/models/models';

@Injectable()
export class AppEffects {
    loadGeneralInformation$: Observable<Action> = createEffect(() => this.actions$.pipe(
        ofType(actions.ActionTypes.LoadGeneralInformation),
        switchMap((action: actions.LoadInformation) => this.dataService.getInformation().pipe(
            map((info: InformationResponse) => new actions.LoadInformationSuccess(info)),
            catchError((error: HttpErrorResponse) => of(new actions.LoadInformationFailure(error))),
        )),
    ));

    constructor(
        private actions$: Actions,
        private dataService: DataService,
    ) {}
}
