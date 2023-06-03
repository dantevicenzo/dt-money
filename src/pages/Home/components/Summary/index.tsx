import { useSummary } from '../../../../hooks/useSummary'
import { Card, CardTitle, Container } from './styles'
import {
  ArrowCircleUp,
  ArrowCircleDown,
  CurrencyDollar,
} from '@phosphor-icons/react'

import { priceFormatter } from '../../../../utils/formatter'

export function Summary() {
  const summary = useSummary()

  return (
    <Container>
      <Card variant="income">
        <CardTitle>
          <span>Entradas</span>
          <ArrowCircleUp size={32} />
        </CardTitle>
        <strong>{priceFormatter.format(summary.income)}</strong>
      </Card>
      <Card variant="outcome">
        <CardTitle>
          <span>Saídas</span>
          <ArrowCircleDown size={32} />
        </CardTitle>
        <strong>{priceFormatter.format(summary.outcome)}</strong>
      </Card>
      <Card variant="total">
        <CardTitle>
          <span>Total</span>
          <CurrencyDollar size={32} />
        </CardTitle>
        <strong>{priceFormatter.format(summary.total)}</strong>
      </Card>
    </Container>
  )
}
