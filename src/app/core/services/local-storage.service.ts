import { Injectable } from '@angular/core';
import * as lsCache from 'lscache';

@Injectable({
    providedIn: 'root',
})
export class LocalStorageService {

    constructor() {
        this.removeExpired();
    }

    get(key: string, removeKey: boolean = false): any {
        const value = lsCache.get(key);
        if (removeKey) {
            this.remove(key);
        }
        return value;
    }

    set(key: string, value: any, expiresInMinutes: number): void {
        lsCache.set(key, value, expiresInMinutes);
    }

    remove(key: string): void {
        lsCache.remove(key);
    }

    removeExpired(): void {
        lsCache.flushExpired();
    }

    removeAll(): void {
        lsCache.flush();
    }
}
