import { useQuery } from "@tanstack/react-query"
import type { AxiosError } from "axios"

import { getRecentTransactions } from "../../api/transactions"
import type { RecentTransactionsResponse } from "../../types/transactions"
import type { ApiErrorResponse } from "../../types/api"

export const useRecentTransactions = (limit = 10) => {
  return useQuery<RecentTransactionsResponse, AxiosError<ApiErrorResponse>>({
    queryKey: ["transactions", "recent", limit],
    queryFn: () => getRecentTransactions(limit),
    retry: false,
  })
}
