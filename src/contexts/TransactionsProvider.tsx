import React, { useEffect, useState } from 'react'
import { api } from '../lib/axios'

interface ITransaction {
  id: number
  description: string
  price: number
  type: 'income' | 'outcome'
  category: string
  createdAt: string
}

interface IAddNewTransactionProps {
  description: string
  price: number
  type: 'income' | 'outcome'
  category: string
}

interface ITransactionsContext {
  transactions: ITransaction[]
  fetchTransactions: (query?: string) => Promise<void>
  addNewTransaction: (newTransaction: IAddNewTransactionProps) => Promise<void>
}

export const TransactionsContext = React.createContext(
  {} as ITransactionsContext,
)

interface ITransactionsProviderProps {
  children: React.ReactNode
}

export function TransactionsProvider({ children }: ITransactionsProviderProps) {
  const [transactions, setTransactions] = useState<ITransaction[]>([])

  async function fetchTransactions(query?: string) {
    const response = await api.get('transactions', {
      params: {
        _sort: 'createdAt',
        _order: 'desc',
        q: query,
      },
    })
    setTransactions(response.data)
  }

  async function addNewTransaction(data: IAddNewTransactionProps) {
    const { description, category, price, type } = data
    const dateNow = new Date()

    const response = await api.post('/transactions', {
      description,
      price,
      type,
      category,
      createdAt: dateNow.toISOString(),
    })

    setTransactions((prev) => [response.data, ...prev])
  }

  useEffect(() => {
    fetchTransactions()
  }, [])

  return (
    <TransactionsContext.Provider
      value={{ transactions, fetchTransactions, addNewTransaction }}
    >
      {children}
    </TransactionsContext.Provider>
  )
}
