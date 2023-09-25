import styled, { css } from 'styled-components/native'
import { TouchableOpacity, Text } from 'react-native'

type Props = {
  isActive: boolean
}

export const ButtonCategory = styled(TouchableOpacity)<Props>`
  border-width: 1px;
  border-radius: 100px;
  padding: 6px 12px;
  ${({ theme, isActive }) => css`
    border-color: ${isActive ? theme.colors.purple : 'transparent'};
    background-color: ${isActive ? 'transparent' : theme.colors.purple};
  `}
`

export const TextButton = styled(Text)<Props>`
  font-family: ${({ theme }) => theme.fonts.robotoBold};
  font-size: ${({ theme }) => theme.text_size.tag}px;
  text-transform: uppercase;
  ${({ theme, isActive }) => css`
    color: ${isActive ? theme.colors.purple_dark : theme.colors.white};
  `}
`
