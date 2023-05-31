import logo from '../../assets/logo.svg'
import { Container, StyledHeader, NewTransactionButton } from './styles'

export function Header() {
  return (
    <Container>
      <StyledHeader>
        <img src={logo} alt="" />
        <NewTransactionButton type="button">
          Nova Transação
        </NewTransactionButton>
      </StyledHeader>
    </Container>
  )
}
