import styled, { css } from 'styled-components'

export const Container = styled.div`
  max-width: 70rem;
  margin: 0 auto;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  gap: 2rem;
`

interface ICardProps {
  variant: 'income' | 'outcome' | 'total'
}

export const Card = styled.div<ICardProps>`
  background-color: ${(props) =>
    props.variant === 'total' ? props.theme.greenDark : props.theme.grey4};

  padding: 1.5rem 1.5rem 1.5rem 2rem;
  margin-top: -5rem;

  border-radius: 6px;

  span {
    font-size: 1rem;
    color: ${(props) => props.theme.grey6};
  }

  svg {
    ${({ variant }) =>
      variant === 'income' &&
      css`
        color: ${(props) => props.theme.green};
      `}

    ${({ variant }) =>
      variant === 'outcome' &&
      css`
        color: ${(props) => props.theme.red};
      `}

    ${({ variant }) =>
      variant === 'total' &&
      css`
        color: ${(props) => props.theme.white};
      `}
  }

  strong {
    display: block;
    font-size: 2rem;
    margin-top: 0.75rem;
    color: ${(props) => props.theme.grey7};
  }
`

export const CardTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
