import logo from '../../assets/logo.svg'
import {
  Container,
  StyledHeader,
  StyledButton,
  Overlay,
  Content,
  Form,
  RadioGroupRoot,
  RadioGroupItem,
  DialogClose,
} from './styles'
import * as Dialog from '@radix-ui/react-dialog'
import { ArrowCircleUp, ArrowCircleDown, X } from '@phosphor-icons/react'

export function Header() {
  return (
    <Container>
      <StyledHeader>
        <img src={logo} alt="" />

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <StyledButton type="button">Nova Transação</StyledButton>
          </Dialog.Trigger>
          <Dialog.Portal>
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
          </Dialog.Portal>
        </Dialog.Root>
      </StyledHeader>
    </Container>
  )
}
