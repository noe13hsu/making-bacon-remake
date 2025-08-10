export interface Field<T> {
  initialValue: T[keyof T],
  label: string;
  name: keyof T;
  type: string;
}

export interface LoginRequestBody {
  email: string
  password: string
}

export interface LoginResponse {
  message: string;
}
