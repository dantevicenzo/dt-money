import { Form, InputText, SearchButton } from './styles'
import { MagnifyingGlass } from '@phosphor-icons/react'

export function Search() {
  return (
    <Form>
      <InputText type="text" placeholder="Busque uma transação" />
      <SearchButton type="submit">
        <MagnifyingGlass size={20} />
        Buscar
      </SearchButton>
    </Form>
  )
}
