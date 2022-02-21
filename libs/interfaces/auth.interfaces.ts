export interface LoginPayload {
  username: string;
  password: string;
}

export interface JwtValidatePayload {
  id: string;
  iat: number;
  exp: number;
}

export interface LoginResponse {
  accessToken: string;
}
