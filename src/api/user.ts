import type { LoginRequestBody, LoginResponse } from "../types/login"
import type { LogoutResponse } from "../types/logout"
import type { RegisterRequestBody, RegisterResponse } from "../types/register"
import { api } from "./api"

export const getUser = async (): Promise<string> => {
  const res = await api.get("/api/user")

  return res.data
}

export const loginUser = async (body: LoginRequestBody): Promise<LoginResponse> => {
  const res = await api.post("/api/user/login", body)

  return res.data
}

export const logoutUser = async (): Promise<LogoutResponse> => {
  const res = await api.post("/api/user/logout")

  return res.data
}

export const registerUser = async (body: RegisterRequestBody): Promise<RegisterResponse> => {
  const res = await api.post("/api/user/register", body)

  return res.data
}
