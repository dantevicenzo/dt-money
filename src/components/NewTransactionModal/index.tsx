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

export function NewTransactionModal() {
  return (
    <DialogPortal>
      <Overlay />
      <Content>
        <strong>Nova Transação</strong>

        <Form>
          <input type="text" placeholder="Descrição" />
          <input type="text" placeholder="Preço" />
          <input type="text" placeholder="Categoria" />
          <RadioGroupRoot>
            <RadioGroupItem value="income">
              <ArrowCircleUp size={24} />
              Entrada
            </RadioGroupItem>
            <RadioGroupItem value="outcome">
              <ArrowCircleDown size={24} />
              Saída
            </RadioGroupItem>
          </RadioGroupRoot>
          <StyledButton type="submit">Cadastrar</StyledButton>
        </Form>

        <DialogClose>
          <X size={24} />
        </DialogClose>
      </Content>
    </DialogPortal>
  )
}
