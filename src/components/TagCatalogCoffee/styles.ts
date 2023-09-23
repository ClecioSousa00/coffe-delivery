import styled, { css } from 'styled-components/native'
import { TouchableOpacity } from 'react-native'

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

export const TextButton = styled.Text`
  font-family: ${({ theme }) => theme.fonts.robotoBold};
  font-size: ${({ theme }) => theme.text_size.tag}px;
  color: ${({ theme }) => theme.colors.purple_dark};
  text-transform: uppercase;
`
