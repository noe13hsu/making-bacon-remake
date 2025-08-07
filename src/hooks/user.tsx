import { useMutation } from "@tanstack/react-query"
import axios, { AxiosError } from "axios"

import type { ApiErrorResponse } from "../types/api"
import type { LoginRequestBody, LoginResponse } from "../types/user"

export const useLogin = () => {
  return useMutation<LoginResponse, AxiosError<ApiErrorResponse>, LoginRequestBody>({
      mutationFn: async ({email, password}) => {
        const api = axios.create({baseURL: import.meta.env.VITE_API_URL, withCredentials: true})
        const res = await api.post("/api/user/login", {email, password})
        return res.data
      },
      onSuccess: () => {
        window.location.href = '/'

        console.log('Successful login')
      },
    })
}
