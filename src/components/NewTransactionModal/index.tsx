import {
  Overlay,
  Content,
  Form,
  RadioGroupRoot,
  RadioGroupItem,
  DialogClose,
  StyledButton,
} from './styles'

import { Portal as DialogPortal } from '@radix-ui/react-dialog'
import { ArrowCircleUp, ArrowCircleDown, X } from '@phosphor-icons/react'
import { Controller, useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useContext } from 'react'
import { TransactionsContext } from '../../contexts/TransactionsProvider'

const addNewTransactionSchema = z.object({
  description: z.string(),
  category: z.string(),
  price: z.number(),
  type: z.enum(['income', 'outcome']),
})

type TAddNewTransactionSchema = z.infer<typeof addNewTransactionSchema>

export function NewTransactionModal() {
  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<TAddNewTransactionSchema>({
    resolver: zodResolver(addNewTransactionSchema),
  })

  const { addNewTransaction } = useContext(TransactionsContext)

  async function handleAddNewTransaction(data: TAddNewTransactionSchema) {
    addNewTransaction(data)
    reset()
  }

  return (
    <DialogPortal>
      <Overlay />
      <Content>
        <strong>Nova Transação</strong>

        <Form onSubmit={handleSubmit(handleAddNewTransaction)}>
          <input
            type="text"
            placeholder="Descrição"
            {...register('description')}
          />
          <input
            type="number"
            placeholder="Preço"
            {...register('price', { valueAsNumber: true })}
          />
          <input
            type="text"
            placeholder="Categoria"
            {...register('category')}
          />

          <Controller
            name="type"
            control={control}
            render={({ field }) => {
              return (
                <RadioGroupRoot
                  onValueChange={field.onChange}
                  value={field.value}
                >
                  <RadioGroupItem value="income">
                    <ArrowCircleUp size={24} />
                    Entrada
                  </RadioGroupItem>
                  <RadioGroupItem value="outcome">
                    <ArrowCircleDown size={24} />
                    Saída
                  </RadioGroupItem>
                </RadioGroupRoot>
              )
            }}
          />

          <StyledButton type="submit" disabled={isSubmitting}>
            Cadastrar
          </StyledButton>
        </Form>

        <DialogClose>
          <X size={24} />
        </DialogClose>
      </Content>
    </DialogPortal>
  )
}
