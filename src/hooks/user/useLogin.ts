import { useMutation, useQueryClient } from "@tanstack/react-query"
import { AxiosError } from "axios"

import type { ApiErrorResponse } from "../../types/api"
import type { LoginRequestBody, LoginResponse } from "../../types/login"
import { loginUser } from "../../api/user"

export const useLogin = () => {
  const queryClient = useQueryClient()

  return useMutation<LoginResponse, AxiosError<ApiErrorResponse>, LoginRequestBody>({
    mutationFn: loginUser,
    onSuccess: async (data) => {
      console.log('User data fetched', data)
      await queryClient.invalidateQueries({ queryKey: ["user"] })
      window.location.href = "/overview"
    },
  })
}
