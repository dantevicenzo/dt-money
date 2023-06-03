import { useContext } from 'react'
import { Price, StyledTable } from './styles'
import { TransactionsContext } from '../../../../contexts/TransactionsProvider'
import { dateTimeFormatter, priceFormatter } from '../../../../utils/formatter'

export function Table() {
  const { transactions } = useContext(TransactionsContext)

  return (
    <>
      <StyledTable>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.description}</td>
              <td>
                <Price variant={transaction.type}>
                  {transaction.type === 'outcome' && '- '}
                  {priceFormatter.format(transaction.price)}
                </Price>
              </td>
              <td>{transaction.category}</td>
              <td>
                {dateTimeFormatter.format(new Date(transaction.createdAt))}
              </td>
            </tr>
          ))}
        </tbody>
      </StyledTable>
    </>
  )
}
