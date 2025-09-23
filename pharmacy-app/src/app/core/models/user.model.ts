export interface User {
  id: number;
  username: string;
  firstName: string;
  lastName: string;
  motherLastName?: string;
  email: string;
  phone?: string;
  roles: string[];
}

export interface LoginRequest {
  username: string;
  password: string;
  rememberMe?: boolean;
}

export interface LoginResponse {
  token: string;
  username: string;
  email: string;
  roles: string[];
}