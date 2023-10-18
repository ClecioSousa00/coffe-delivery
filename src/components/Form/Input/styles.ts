import styled, { css } from 'styled-components/native'
import { TextInput } from 'react-native'

import { InputProps } from '.'

type Props = Pick<InputProps, 'size' | 'error'>

const modifiers = {
  small: () => css`
    width: 92px;
  `,
  medium: () => css`
    width: 224px;
  `,
  large: () => css`
    width: 100%;
  `,
}

export const Container = styled.View``

export const Input = styled(TextInput)<Props>`
  ${({ theme, size, error }) => css`
    height: 42px;
    background-color: ${theme.colors.gray_700};
    border-radius: 4px;
    padding: 0px 12px;
    ${!!size && modifiers[size]()}
    border: ${error
      ? `1px solid ${theme.colors.red_dark}`
      : `1px solid ${theme.colors.gray_600}`};
  `}
`
export const MessageError = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.robotoRegular};
    font-size: ${theme.text_size.xs}px;
    color: ${theme.colors.red_dark};
  `}
`
