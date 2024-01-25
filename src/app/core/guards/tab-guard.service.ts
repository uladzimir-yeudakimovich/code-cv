import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AppSelectors } from '@core/store';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { GetUrlItemsFromRoute } from '../../shared/utils/routing.utils';

@Injectable({ providedIn: 'root' })
export class TabGuard {

    constructor(private store: Store<any>, private router: Router) { }

    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | boolean {
        return this.store.pipe(
            select(AppSelectors.selectVisibleServiceNavigationItems),
            take(1),
            map((navigationItems: [{ route: string }]) => {
                const matchingVisibleItems = !navigationItems ? [] : navigationItems.filter(item => state.url.startsWith(item.route));
                if (matchingVisibleItems.length === 0) {
                    const itemsToParentRoute = GetUrlItemsFromRoute.getItems<ActivatedRouteSnapshot>(childRoute.parent);
                    return this.router.createUrlTree(itemsToParentRoute.map(url => url.path));
                } else {
                    return true;
                }
            }),
        );
    }
}
