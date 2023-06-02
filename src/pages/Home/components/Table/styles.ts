import styled from 'styled-components'

export const StyledTable = styled.table`
  width: 100%;
  max-width: 70rem;
  margin: 0 auto;

  margin-top: 1.5rem;

  border-collapse: separate;
  border-spacing: 0 8px;

  font-size: 1rem;

  tr {
    background-color: ${(props) => props.theme.grey3};
    border-radius: 5px;
    gap: 8px;

    td:first-child {
      width: 45%;
      padding-left: 2rem;

      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
    }

    td {
      padding: 1.25rem 0;
    }

    td:last-child {
      text-align: right;
      padding-right: 2rem;

      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
    }
  }
`
interface IPriceProps {
  variant: 'income' | 'outcome'
}
export const Price = styled.span<IPriceProps>`
  color: ${({ variant, theme }) =>
    variant === 'income' ? theme.greenLight : theme.red};
`
