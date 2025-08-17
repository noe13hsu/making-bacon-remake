import type { Transaction } from "../../types/transactions"

interface Props {
  transaction: Transaction
}

export const Card = ({ transaction }: Props) => {
  const {amount, description, category, type, date} = transaction
  const dateLocaleString = new Date(date).toLocaleString()
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
      <span>{dateLocaleString}</span>
    </div>
  )
}
