import { useMutation } from "@tanstack/react-query"
import { AxiosError } from "axios"

import type { ApiErrorResponse } from "../../types/api"
import { logoutUser } from "../../api/user"
import type { LogoutResponse } from "../../types/logout"

export const useLogout = () => {
  return useMutation<LogoutResponse, AxiosError<ApiErrorResponse>>({
    mutationFn: logoutUser,
    onSuccess: () => window.location.href = "/login",
  })
}
