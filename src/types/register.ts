export interface Field<T> {
  initialValue: T[keyof T],
  label: string;
  name: keyof T;
  type: string;
}

export interface RegisterRequestBody {
  confirmPassword: string
  email: string
  password: string
}

export interface RegisterResponse {
  message: string;
}
