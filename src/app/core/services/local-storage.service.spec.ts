import { inject, TestBed } from '@angular/core/testing';
import * as lsCache from 'lscache';
import { LocalStorageService } from './local-storage.service';

describe('LocalStorageService', () => {
    let service;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                LocalStorageService,
            ],
        });
    });

    beforeEach(inject([LocalStorageService], (localStorageService: LocalStorageService) => {
        service = localStorageService;
    }));

    it('should create', () => {
        expect(service).toBeDefined();
    });

    describe('get()', () => {
        it('should get specified key from lsCache', () => {
            spyOn(lsCache, 'get').and.returnValue('value');

            expect(service.get('key')).toEqual('value');
            expect(lsCache.get).toHaveBeenCalledWith('key');
        });
    });

    describe('set()', () => {
        it('should set specified key in lsCache with default expiration', () => {
            spyOn(lsCache, 'set');

            service.set('key', 'value', 2);

            expect(lsCache.set).toHaveBeenCalledWith('key', 'value', 2);
        });

        it('should set specified key in lsCache with provided expiration', () => {
            spyOn(lsCache, 'set');

            service.set('key', 'value', 1000);

            expect(lsCache.set).toHaveBeenCalledWith('key', 'value', 1000);
        });
    });

    describe('remove()', () => {
        it('should remove specified key from lsCache', () => {
            spyOn(lsCache, 'remove');

            service.remove('key1');

            expect(lsCache.remove).toHaveBeenCalledWith('key1');
        });
    });

    describe('flushExpired()', () => {
        it('should flush expired keys from lsCache', () => {
            spyOn(lsCache, 'flushExpired');

            service.removeExpired();

            expect(lsCache.flushExpired).toHaveBeenCalled();
        });
    });
});
