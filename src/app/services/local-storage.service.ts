import { Injectable } from '@angular/core';
import * as lsCache from 'lscache';

@Injectable({
    providedIn: 'root',
})
export class LocalStorageService {
    private EXPIRE_TIME: number = 60 * 24; // 1 day

    constructor() {
        this.flushExpired();
    }

    get(key: string, removeKey: boolean = false): any {
        const value = lsCache.get(key);
        if (removeKey) {
            this.remove(key);
        }
        return value;
    }

    set(key: string, value: any, expiresInMinutes: number = this.EXPIRE_TIME): void {
        lsCache.set(key, value, expiresInMinutes);
    }

    remove(key: string): void {
        lsCache.remove(key);
    }

    flushExpired(): void {
        lsCache.flushExpired();
    }
}
