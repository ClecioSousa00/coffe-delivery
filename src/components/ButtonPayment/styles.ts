import { RectButton } from 'react-native-gesture-handler'
import styled, { css } from 'styled-components/native'

export const Button = styled(RectButton)`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 4px;
  width: 152px;
  height: 50px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.gray_600};
`
export const Text = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.gray_300};
    font-family: ${theme.fonts.robotoRegular};
    font-size: ${theme.text_size.xs}px;
    text-transform: uppercase;
  `}
`
