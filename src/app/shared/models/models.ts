export interface InformationResponse {
    education: Info[];
    experience: Info[];
    technology: Competence[];
    general: Info;
}

export interface Info {
    en: string;
    ru: string;
    name?: string;
}

export interface Competence {
    level: number[];
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
