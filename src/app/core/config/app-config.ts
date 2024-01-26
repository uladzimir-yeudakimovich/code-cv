import { jsonMember, jsonObject } from 'typedjson';
import { StringConfigProperty } from './app-config-property.models';

@jsonObject
export class AppConfig {
    @jsonMember
        globalConfig: GlobalConfig;
    @jsonMember
        serviceConfig: ServiceConfig;
    @jsonMember
        hiddenServiceConfig: HiddenServiceConfig;
}

@jsonObject
export class GlobalConfig {
    @jsonMember
        env: StringConfigProperty;
    @jsonMember
        authRedirectUri: StringConfigProperty;
}

@jsonObject
export class ServiceConfig {
    @jsonMember
        baseUrl: StringConfigProperty;
}

@jsonObject
export class HiddenServiceConfig {}
