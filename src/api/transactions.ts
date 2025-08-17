import type { RecentTransactionsResponse } from "../types/transactions"
import { api } from "./api"

export const getRecentTransactions = async (limit = 10): Promise<RecentTransactionsResponse> => {
  const res = await api.get("/api/transactions/recent", { params: { limit }})

  return res.data
}
