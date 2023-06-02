import styled from 'styled-components'
import * as Dialog from '@radix-ui/react-dialog'
import * as RadioGroup from '@radix-ui/react-radio-group'

export const StyledButton = styled.button`
  background-color: ${(props) => props.theme.green};
  color: ${(props) => props.theme.white};

  padding: 1rem 2rem;
  border-radius: 6px;

  border: none;

  font-size: 1rem;
  font-weight: bold;

  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.greenLight};
  }
`

export const Overlay = styled(Dialog.Overlay)`
  background: rgba(0 0 0 / 0.75);
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
`
export const Content = styled(Dialog.Content)`
  width: 33rem;
  background-color: ${(props) => props.theme.grey2};
  padding: 3rem 3rem 2.5rem;
  border-radius: 6px;

  strong {
    color: ${(props) => props.theme.grey7};
    font-size: 1.5rem;
  }

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`
export const Form = styled.form`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;

  input + input {
    margin-top: 1rem;
  }

  div[role='radiogroup'] {
    margin-top: 1.5rem;
  }

  button[type='submit'] {
    margin-top: 2.5rem;
  }

  input[type='text'] {
    border-radius: 6px;
    padding: 1rem;
    background-color: ${(props) => props.theme.grey1};
    border: none;
    color: ${(props) => props.theme.grey6};
  }
`
export const RadioGroupRoot = styled(RadioGroup.Root)`
  display: grid;
  grid-template-columns: 1fr 1fr;

  gap: 1rem;
`
export const RadioGroupItem = styled(RadioGroup.Item)`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
  padding: 16px 24px;
  border-radius: 6px;

  background-color: ${(props) => props.theme.grey3};
  color: ${(props) => props.theme.grey6};

  font-size: 1rem;

  border: none;

  cursor: pointer;

  svg {
    color: ${({ value, theme }) =>
      value === 'income' ? theme.greenLight : theme.red};
  }

  &:hover {
    background-color: ${(props) => props.theme.grey4};
  }

  &[data-state='checked'] {
    background-color: ${({ value, theme }) =>
      value === 'income' ? theme.greenDark : theme.redDark};

    color: ${(props) => props.theme.white};

    svg {
      color: ${(props) => props.theme.white};
    }
  }
`

export const DialogClose = styled(Dialog.Close)`
  position: absolute;
  top: 24px;
  right: 24px;
  line-height: 0;
  background-color: transparent;
  border: none;
  cursor: pointer;

  color: ${(props) => props.theme.grey5};
`
