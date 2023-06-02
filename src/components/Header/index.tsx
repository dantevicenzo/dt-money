import logo from '../../assets/logo.svg'
import { Container, StyledHeader, StyledButton } from './styles'
import * as Dialog from '@radix-ui/react-dialog'
import { NewTransactionModal } from '../NewTransactionModal'

export function Header() {
  return (
    <Container>
      <StyledHeader>
        <img src={logo} alt="" />

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <StyledButton type="button">Nova Transação</StyledButton>
          </Dialog.Trigger>
          <NewTransactionModal />
        </Dialog.Root>
      </StyledHeader>
    </Container>
  )
}
