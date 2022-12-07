import { jsonMember, jsonObject } from 'typedjson';

export abstract class ConfigProperty {
    @jsonMember
    override?: boolean;
    abstract value;
}

@jsonObject
export class StringConfigProperty extends ConfigProperty {
    @jsonMember
    value: string;
}

@jsonObject
export class BooleanConfigProperty extends ConfigProperty {
    @jsonMember
    value: boolean;
}

@jsonObject
export class NumberConfigProperty extends ConfigProperty {
    @jsonMember
    value: number;
}

@jsonObject
export class MapConfigProperty<T> extends ConfigProperty {
    @jsonMember
    key: string;
    @jsonMember
    value: T;
}
