import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import { TokenStorageService } from '../services/token-storage.service';

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.html',
    styleUrls: ['./navigation.scss']
})
export class NavigationComponent implements OnInit, OnDestroy {
    mobileQuery: MediaQueryList;
    title: string;
    isLoggedIn: boolean;
    username?: string;

    private _mobileQueryListener: () => void;

    constructor(
        changeDetectorRef: ChangeDetectorRef,
        media: MediaMatcher,
        private router: Router,
        private tokenStorageService: TokenStorageService
    ) {
        this.mobileQuery = media.matchMedia('(max-width: 600px)');
        this._mobileQueryListener = () => changeDetectorRef.detectChanges();
        this.mobileQuery.addListener(this._mobileQueryListener);
    }

    ngOnInit() {
        this.tokenStorageService.isLoggedIn.subscribe(isLogin => {
            this.isLoggedIn = isLogin;

            if (isLogin) {
                const { username } = this.tokenStorageService.getUser();
                this.username = username;
            }
        });

        this.router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                const name = event.url.replace('/', '');
                this.title = name.charAt(0).toUpperCase() + name.slice(1);
                if (!this.title) {
                    this.title = 'Login';
                };
            }
        });
    }

    logout(): void {
        this.tokenStorageService.logOut();
    }

    ngOnDestroy(): void {
        this.mobileQuery.removeListener(this._mobileQueryListener);
    }
}
