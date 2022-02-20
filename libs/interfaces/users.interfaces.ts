export interface CreateUserPayload {
  fullName: string,
  phoneNumber: string,
  plan: number,
  locality: string,
  street: string,
  suite: string,
  apartment?: string,
  username: string,
  password: string,
  confirmPassword: string,
}

export interface AbillsUser {
  id: number,
}
