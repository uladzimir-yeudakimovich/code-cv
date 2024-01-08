export interface TokenResponse {
    message: string;
    accessToken: string;
}

export interface LoginResponse extends TokenResponse {
    user: UserInfo;
    refreshToken: string;
    expiresIn: number;
    refreshTokenExpiresIn: number;
}

interface UserInfo {
    id: string;
    login: string;
}
