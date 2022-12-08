import { jsonArrayMember, jsonMember, jsonObject } from 'typedjson';
import { BooleanConfigProperty, MapConfigProperty, StringConfigProperty } from './app-config-property.models';

@jsonObject
export class AppConfig {
    @jsonMember
        serviceConfig: ServiceConfig;
}

@jsonObject
export class ServiceConfig {
    @jsonMember
        baseCVServiceUrl: StringConfigProperty;
}

@jsonObject
export class HiddenServiceConfig {
    @jsonMember
        feedBackService: BooleanConfigProperty;
}

@jsonObject
export class GlobalConfig {
    @jsonMember
        env: StringConfigProperty;
    @jsonMember
        authRedirectUri: StringConfigProperty;
    @jsonMember
        authLogoutUri: StringConfigProperty;
    // @jsonArrayMember(MapConfigProperty)
    //     enumResources: MapConfigProperty<JsonSchemaResourceConfig>[];
}
