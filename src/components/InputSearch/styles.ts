import styled, { css } from 'styled-components/native'
import { View } from 'react-native'
import { InputSearchProps } from '.'

type Props = Pick<InputSearchProps, 'isFocus'>

export const Container = styled(View)<Props>`
  width: 100%;
  height: 52px;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  padding: 0px 12px;
  background-color: ${({ theme }) => theme.colors.gray_200};
  border-radius: 4px;
  ${({ theme, isFocus }) =>
    isFocus &&
    css`
      border: 1px solid ${theme.colors.gray_300};
    `}
`

export const Input = styled.TextInput`
  flex: 1;
  color: ${({ theme }) => theme.colors.white};
`
