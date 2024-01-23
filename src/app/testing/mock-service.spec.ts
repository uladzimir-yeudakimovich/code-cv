import {of, Subject} from 'rxjs';

export class MockAppConfigService {
    loadAppConfig() {
        return of();
    }

    getAppConfig() {
        return of();
    }
}

export class MockAuthGuard {
    canActivate() {
        return of();
    }
}

export class MockAuthenticationInterceptor {
    intercept() {
        return of();
    }

    addAuthenticationToken() {
        return of();
    }
}

export class MockAuthService {
    login() {
        return of();
    }

    register() {
        return of();
    }
}

export class MockJwtService {
    saveUserData() {
        return of();
    }

    getToken() {
        return of();
    }

    getUser() {
        return of();
    }

    isRefreshTokenExpired() {
        return of();
    }

    updateAccessToken() {
        return of();
    }

    refreshSession() {
        return of();
    }

    get isLoggedIn$() {
        return of();
    }

    logOut() {
        return of();
    }
}

export class MockAlertService {
    setMessage() {
        return of();
    }

    getMessage() {
        return of();
    }
}

export class MockLanguageService {
    setLanguage() {
        return of();
    }
}

export class MockDataService {
    getInformation() {
        return of();
    }

    getProjects() {
        return of();
    }
}

export class MockMessageService {
    getMessages() {
        return of();
    }

    sendMessage() {
        return of();
    }

    updateMessage() {
        return of();
    }
}

export class MockRouter {
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

export class MockLocalStorageService {
    get() {
        return '';
    }

    set(key: string, value: any, expiresInMinutes?: number) {
        return of();
    }

    remove(key: string) {
        return of();
    }

    removeExpired() {
        return of();
    }

    removeAll() {
        return of();
    }
}
