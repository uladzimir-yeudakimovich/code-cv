import { Injectable } from '@angular/core';
import * as lsCache from 'lscache';

@Injectable({
    providedIn: 'root',
})
export class LocalStorageService {

    constructor() {
        this.flushExpired();
    }

    get(key: string, removeKey: boolean = false): string | null {
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

    flushExpired(): void {
        lsCache.flushExpired();
    }
}
