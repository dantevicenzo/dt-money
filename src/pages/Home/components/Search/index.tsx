import { zodResolver } from '@hookform/resolvers/zod'
import { Form, InputText, SearchButton } from './styles'
import { MagnifyingGlass } from '@phosphor-icons/react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { useContext } from 'react'
import { TransactionsContext } from '../../../../contexts/TransactionsProvider'

const searchFormSchema = z.object({
  query: z.string(),
})

type TSearchFormSchema = z.infer<typeof searchFormSchema>

export function Search() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<TSearchFormSchema>({
    resolver: zodResolver(searchFormSchema),
  })

  const { fetchTransactions } = useContext(TransactionsContext)

  async function handleSearch(data: TSearchFormSchema) {
    await fetchTransactions(data.query)
  }

  return (
    <Form onSubmit={handleSubmit(handleSearch)}>
      <InputText
        type="text"
        placeholder="Busque uma transação"
        {...register('query')}
      />
      <SearchButton type="submit" disabled={isSubmitting}>
        <MagnifyingGlass size={20} />
        Buscar
      </SearchButton>
    </Form>
  )
}
