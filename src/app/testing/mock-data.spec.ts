import { AppConfig } from '../core/config/app-config';
import { InformationResponse } from '../shared/models/models';

export const mockInformation: InformationResponse = {
    education: [
        { en: 'Course 1', ru: 'text 1' },
        { en: 'Course 2', ru: 'text 2' },
        { en: 'Course 3', ru: 'text 3' },
    ],
    experience: [
        { en: 'Company 1', ru: 'text 1' },
        { en: 'Company 2', ru: 'text 2' },
        { en: 'Company 3', ru: 'text 3' },
    ],
    technology: [
        { level: [5], technology: 'Angular' },
        { level: [5], technology: 'NgRx' },
        { level: [5], technology: 'RxJS' },
    ],
    general: {
        en: 'General info',
        ru: 'text',
        name: 'testName',
    },
};

export const mockAppConfig: AppConfig = {
    globalConfig: {
        env: {
            value: 'local',
        },
        authRedirectUri: {
            value: 'http://localhost:4000',
        },
    },
    serviceConfig: {
        baseUrl: {
            value: '',
            override: true,
        },
    },
    hiddenServiceConfig: {},
};
