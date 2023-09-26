import { Text, Pressable } from 'react-native'
import styled, { css } from 'styled-components/native'

type ButtonProps = {
  isSelected: boolean
}

export const ButtonOption = styled(Pressable)<ButtonProps>`
  height: 40px;
  width: 100px;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors.gray_700};
  ${({ theme, isSelected }) =>
    isSelected &&
    css`
      background-color: transparent;
      border: 1px solid ${theme.colors.purple};
    `}
`

export const ButtonText = styled(Text)<ButtonProps>`
  font-family: ${({ theme }) => theme.fonts.robotoRegular};
  font-size: ${({ theme }) => theme.text_size.sm}px;
  color: ${({ theme }) => theme.colors.gray_300};
  ${({ theme, isSelected }) =>
    isSelected &&
    css`
      color: ${theme.colors.purple};
      font-family: ${({ theme }) => theme.fonts.robotoBold};
    `}
`
