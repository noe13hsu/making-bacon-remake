import { Card } from "../components/transactions/Card"
import { useRecentTransactions } from "../hooks/transactions/useRecentTransactions"
import { useLogout } from "../hooks/user/useLogout"

export const Overview = () => {
  const { mutate, isPending } = useLogout()
  const { data, error, isLoading } = useRecentTransactions()
  console.log(data)

  if (isLoading) return <p>Loading...</p>
  if (error || !data) return <p>Something went wrong...</p>

  const {expense, income} = data

  return (
    <div className="p-2">
      <h1>Overview</h1>
      {income.map(transaction => <Card key={transaction.id} transaction={transaction} />)}
      {expense.map(transaction => <Card key={transaction.id} transaction={transaction} />)}
      <button onClick={() => mutate()}>{isPending ? "Logging out" : "log out"}</button>
    </div>
  )
}
