import styled from 'styled-components'

export const Form = styled.form`
  max-width: 70rem;
  margin: 4rem auto 0;
  display: flex;
  gap: 1rem;
`
export const InputText = styled.input`
  flex: 1;
  border-radius: 6px;
  padding: 1rem;
  background-color: ${(props) => props.theme.grey1};
  border: none;
  color: ${(props) => props.theme.grey6};
`
export const SearchButton = styled.button`
  display: flex;
  align-items: center;
  padding: 0.875rem 2rem;
  border-radius: 6px;
  gap: 0.75rem;
  background-color: transparent;
  color: ${(props) => props.theme.greenLight};
  border: none;
  box-shadow: 0 0 0 1px ${(props) => props.theme.greenLight};
  cursor: pointer;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  &:enabled:hover {
    box-shadow: none;
    background-color: ${(props) => props.theme.green};
    color: ${(props) => props.theme.white};
  }
`
