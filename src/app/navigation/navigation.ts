import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { Router, NavigationEnd } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { JwtService } from '../core/services/jwt.service';

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.html',
    styleUrls: ['./navigation.scss'],
})
export class NavigationComponent implements OnInit, OnDestroy {
    username: string;
    private mobileQuery: MediaQueryList;
    private readonly _mobileQueryListener: () => void;

    constructor(
        public jwtService: JwtService,
        private changeDetectorRef: ChangeDetectorRef,
        private media: MediaMatcher,
        private router: Router,
        private titleService: Title,
    ) {
        this.mobileQuery = media.matchMedia('(max-width: 600px)');
        this._mobileQueryListener = () => changeDetectorRef.detectChanges();
        this.mobileQuery.addListener(this._mobileQueryListener);
    }

    ngOnInit() {
        this.router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                const urlParts = event.url.split('/').filter(Boolean);
                const newTitle = urlParts.length > 0 ? urlParts[0].charAt(0).toUpperCase() + urlParts[0].slice(1) : 'Login';
                this.titleService.setTitle(newTitle);
            }
        });
    }

    getTitle(): string {
        return this.titleService.getTitle();
    }

    isMobile(): boolean {
        return this.mobileQuery.matches;
    }

    logout(): void {
        this.jwtService.logOut();
    }

    ngOnDestroy(): void {
        this.mobileQuery.removeListener(this._mobileQueryListener);
    }
}
