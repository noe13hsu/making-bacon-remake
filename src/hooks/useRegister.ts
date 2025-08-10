import { useMutation, useQueryClient } from "@tanstack/react-query"
import { AxiosError } from "axios"

import type { ApiErrorResponse } from "../types/api"
import { registerUser } from "../api/user"
import type { RegisterRequestBody, RegisterResponse } from "../types/register"

export const useRegister = () => {
  const queryClient = useQueryClient()

  return useMutation<RegisterResponse, AxiosError<ApiErrorResponse>, RegisterRequestBody>({
    mutationFn: registerUser,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["user"] })
      window.location.href = "/overview"
    },
  })
}
