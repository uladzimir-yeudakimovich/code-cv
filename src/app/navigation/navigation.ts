import { ChangeDetectorRef, Component, OnDestroy, OnInit, Inject } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { Router, NavigationEnd } from '@angular/router';
import { JwtService } from '../core/services/jwt.service';

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.html',
    styleUrls: ['./navigation.scss'],
})
export class NavigationComponent implements OnInit, OnDestroy {
    mobileQuery: MediaQueryList;
    title: string;
    isLoggedIn: boolean;
    username: string;

    private _mobileQueryListener: () => void;

    constructor(
        changeDetectorRef: ChangeDetectorRef,
        media: MediaMatcher,
        private router: Router,
        private jwtService: JwtService,
    ) {
        this.mobileQuery = media.matchMedia('(max-width: 600px)');
        this._mobileQueryListener = () => changeDetectorRef.detectChanges();
        this.mobileQuery.addListener(this._mobileQueryListener);
    }

    ngOnInit() {
        this.jwtService.refreshComplete$.subscribe(isLogin => {
            this.isLoggedIn = isLogin;
            this.username = this.jwtService.getUser().login;
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
        this.jwtService.logOut();
    }

    ngOnDestroy(): void {
        this.mobileQuery.removeListener(this._mobileQueryListener);
    }
}
