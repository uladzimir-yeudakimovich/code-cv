export interface TokenResponse {
    message: string;
    accessToken: string;
    accessTokenExpiresIn: number;
}

export interface LoginResponse extends TokenResponse {
    user: UserInfo;
    refreshToken: string;
    expiresIn: number;
    refreshTokenExpiresIn: number;
}

export interface UserInfo {
    id: string;
    login: string;
}
