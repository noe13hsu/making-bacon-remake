import type { Transaction } from "../../types/transactions"
import { formatDate } from "../../utils/date"

interface Props {
  transaction: Transaction
}

export const Card = ({ transaction }: Props) => {
  const {amount, description, category, type, date} = transaction
  const upperCasedType = type.toUpperCase()

  return (
    <div className="flex flex-col border rounded-sm mb-2 p-2">
      <div className="flex justify-between">
        <span>{description}</span>
        <span>{amount}</span>
      </div>
        <div className="flex justify-between">
        <span>{upperCasedType}</span>
        <span>{category}</span>
      </div>
      <span>{formatDate(date)}</span>
    </div>
  )
}
