import {of, Subject} from 'rxjs';

export class MocAuthService {
    login() {
        return of();
    }

    register() {
        return of();
    }
}

export class MocAlertService {
    getMessage() {
        return of();
    }
}

export class MocTokenStorageService {
    logOut() {
        return of();
    }

    saveToken() {
        return of();
    }

    getToken() {
        return of();
    }

    saveUser() {
        return of();
    }

    getUser() {
        return of();
    }
}

export class MocRouter {
    event: Subject<Event> = new Subject();

    routerState = {
        snapshot: {
            root: {
                routeConfig: {
                    data: {},
                },
                pathFromRoot: [
                    {
                        url: [
                            {
                                path: '',
                            },
                        ],
                    },
                ],
            },
        },
    };

    navigate(param: any) {
        return Promise.resolve(true);
    }
}
