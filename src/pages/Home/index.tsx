import { Header } from '../../components/Header'
import { Summary } from './components/Summary'
import { Search } from './components/Search'
import { Table } from './components/Table'
import { TransactionsProvider } from '../../contexts/TransactionsProvider'

export function Home() {
  return (
    <>
      <TransactionsProvider>
        <Header />
        <Summary />
        <Search />
        <Table />
      </TransactionsProvider>
    </>
  )
}
