import React, { useEffect, useState } from 'react'

interface ITransaction {
  id: number
  description: string
  price: number
  type: 'income' | 'outcome'
  category: string
  createdAT: string
}

interface ITransactionsContext {
  transactions: ITransaction[]
}

export const TransactionsContext = React.createContext(
  {} as ITransactionsContext,
)

interface ITransactionsProviderProps {
  children: React.ReactNode
}

export function TransactionsProvider({ children }: ITransactionsProviderProps) {
  const [transactions, setTransactions] = useState<ITransaction[]>([])

  async function fetchTransactions() {
    const response = await fetch('http://localhost:3000/transactions')
    const data = await response.json()
    setTransactions(data)
  }

  useEffect(() => {
    fetchTransactions()
  }, [])

  return (
    <TransactionsContext.Provider value={{ transactions }}>
      {children}
    </TransactionsContext.Provider>
  )
}
