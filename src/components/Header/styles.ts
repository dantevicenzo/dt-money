import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${(props) => props.theme.grey1};
`
export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 70rem;
  margin: 0 auto;
  padding: 2.5rem 0 7.625rem;
`

export const NewTransactionButton = styled.button`
  background-color: ${(props) => props.theme.green};
  color: ${(props) => props.theme.white};

  padding: 0.75rem 1.25rem;
  border-radius: 6px;

  border: none;

  font-size: 1rem;
  font-weight: bold;

  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.greenLight};
  }
`
