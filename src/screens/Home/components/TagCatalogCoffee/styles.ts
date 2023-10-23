import styled, { css } from 'styled-components/native'
import { Pressable, Text } from 'react-native'
import Animated from 'react-native-reanimated'

const PressableAnimated = Animated.createAnimatedComponent(Pressable)

type Props = {
  isActive: boolean
}

export const ButtonCategory = styled(PressableAnimated)<Props>`
  border-width: 1px;
  border-radius: 100px;
  padding: 6px 12px;
  /* ${({ theme, isActive }) => css`
    border-color: ${isActive ? theme.colors.purple : 'transparent'};
    background-color: ${isActive ? 'transparent' : theme.colors.purple};
  `} */
`

export const TextButton = styled(Animated.Text)<Props>`
  font-family: ${({ theme }) => theme.fonts.robotoBold};
  font-size: ${({ theme }) => theme.text_size.tag}px;
  text-transform: uppercase;
  /* ${({ theme, isActive }) => css`
    color: ${isActive ? theme.colors.purple_dark : theme.colors.white};
  `} */
`
