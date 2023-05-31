import { Price, StyledTable } from './styles'
export function Table() {
  return (
    <>
      <StyledTable>
        <tbody>
          <tr>
            <td>Desenvolvimento de Site</td>
            <td>
              <Price variant="income">R$ 12.000,00</Price>
            </td>
            <td>Venda</td>
            <td>13/04/2022</td>
          </tr>
          <tr>
            <td>Hamburguer</td>
            <td>
              <Price variant="outcome">- R$ 59,00</Price>
            </td>
            <td>Alimentação</td>
            <td>10/04/2022</td>
          </tr>
          <tr>
            <td>Aluguel do apartamento</td>
            <td>
              <Price variant="outcome">- R$ 1.200,00</Price>
            </td>
            <td>Casa</td>
            <td>27/03/2022</td>
          </tr>
          <tr>
            <td>Computador</td>
            <td>
              <Price variant="income">R$ 5.400,00</Price>
            </td>
            <td>Venda</td>
            <td>15/03/2022</td>
          </tr>
          <tr>
            <td>Desenvolvimento de site</td>
            <td>
              <Price variant="income">R$ 8.000,00</Price>
            </td>
            <td>Venda</td>
            <td>13/03/2022</td>
          </tr>
        </tbody>
      </StyledTable>
    </>
  )
}
