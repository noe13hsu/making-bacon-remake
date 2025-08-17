export interface RecentTransactionsResponse {
  expense: Transaction[],
  income: Transaction[],
}

export interface Transaction {
  amount: string,
  category: string,
  date: string,
  description: string,
  id: number,
  type: "income" | "expense",
}
