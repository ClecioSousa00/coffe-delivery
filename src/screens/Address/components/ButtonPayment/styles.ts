import styled, { css } from 'styled-components/native'
import { ButtonPaymentProps } from './index'
import { TouchableOpacity } from 'react-native'

type Props = Pick<ButtonPaymentProps, 'isActive'>

export const Button = styled(TouchableOpacity)<Props>`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 4px;
  width: 152px;
  height: 50px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.gray_600};
  ${({ theme, isActive }) =>
    isActive &&
    css`
      border: 1px solid ${theme.colors.purple};
    `}
`
export const Text = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.gray_300};
    font-family: ${theme.fonts.robotoRegular};
    font-size: ${theme.text_size.xs}px;
    text-transform: uppercase;
  `}
`
