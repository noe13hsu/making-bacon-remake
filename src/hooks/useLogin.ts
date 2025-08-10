import { useMutation } from "@tanstack/react-query"
import { AxiosError } from "axios"

import type { ApiErrorResponse } from "../types/api"
import type { LoginRequestBody, LoginResponse } from "../types/login"
import { loginUser } from "../api/user"

export const useLogin = () => {
  return useMutation<LoginResponse, AxiosError<ApiErrorResponse>, LoginRequestBody>({
    mutationFn: loginUser,
    onSuccess: () => {
      window.location.href = "/overview"
    },
  })
}
