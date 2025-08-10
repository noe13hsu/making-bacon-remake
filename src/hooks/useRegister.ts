import { useMutation } from "@tanstack/react-query"
import { AxiosError } from "axios"

import type { ApiErrorResponse } from "../types/api"
import { registerUser } from "../api/user"
import type { RegisterRequestBody, RegisterResponse } from "../types/register"

export const useRegister = () => {
  return useMutation<RegisterResponse, AxiosError<ApiErrorResponse>, RegisterRequestBody>({
    mutationFn: registerUser,
    onSuccess: () => {
      window.location.href = "/overview"
    },
  })
}
