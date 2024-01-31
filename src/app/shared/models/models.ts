export interface InformationResponse {
    education: BasicInfo[];
    experience: BasicInfo[];
    technology: Competence[];
    general: GeneralInfo;
}

export interface BasicInfo {
    en: string;
    ru: string;
}

export interface GeneralInfo extends BasicInfo {
    name?: string;
}

export interface Competence {
    level: Array<number>;
    technology: string;
}

export interface Project {
    click: string;
    description?: string;
    en: string;
    images: Array<string>;
    link: string;
    name: string;
    ru: string;
}

export interface Feedback {
    email?: string;
    message: string;
    name: string;
    date: Date;
}

export interface UserCredentials {
    email?: string;
    password: string;
    username: string;
}
