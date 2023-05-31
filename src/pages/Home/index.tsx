import { Header } from '../../components/Header'
import { Summary } from './components/Summary'
import { Search } from './components/Search'
import { Table } from './components/Table'

export function Home() {
  return (
    <>
      <Header />
      <Summary />
      <Search />
      <Table />
    </>
  )
}
