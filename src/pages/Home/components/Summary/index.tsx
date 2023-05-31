import { Card, CardTitle, Container } from './styles'
import {
  ArrowCircleUp,
  ArrowCircleDown,
  CurrencyDollar,
} from '@phosphor-icons/react'

export function Summary() {
  return (
    <Container>
      <Card variant="income">
        <CardTitle>
          <span>Entradas</span>
          <ArrowCircleUp size={32} />
        </CardTitle>
        <strong>R$ 17.400,00</strong>
      </Card>
      <Card variant="outcome">
        <CardTitle>
          <span>Saídas</span>
          <ArrowCircleDown size={32} />
        </CardTitle>
        <strong>R$ 17.400,00</strong>
      </Card>
      <Card variant="total">
        <CardTitle>
          <span>Total</span>
          <CurrencyDollar size={32} />
        </CardTitle>
        <strong>R$ 16.141,00</strong>
      </Card>
    </Container>
  )
}
