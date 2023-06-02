import { useContext } from 'react'
import { Price, StyledTable } from './styles'
import { TransactionsContext } from '../../../../contexts/TransactionsProvider'

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
                <Price variant={transaction.type}>{transaction.price}</Price>
              </td>
              <td>{transaction.category}</td>
              <td>{new Date(transaction.createdAT).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </StyledTable>
    </>
  )
}
