import styled from 'styled-components/native'
import { Pressable } from 'react-native'
import Animated from 'react-native-reanimated'

const PressableAnimated = Animated.createAnimatedComponent(Pressable)

export const ButtonCategory = styled(PressableAnimated)`
  border-width: 1px;
  border-radius: 100px;
  padding: 6px 12px;
`

export const TextButton = styled(Animated.Text)`
  font-family: ${({ theme }) => theme.fonts.robotoBold};
  font-size: ${({ theme }) => theme.text_size.tag}px;
  text-transform: uppercase;
`
