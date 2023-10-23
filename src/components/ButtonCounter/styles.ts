import styled, { css } from 'styled-components/native'
import { Pressable } from 'react-native'
import Animated from 'react-native-reanimated'

const animatedPressable = Animated.createAnimatedComponent(Pressable)

export const ContentInput = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 14px;
  border: 1px solid ${({ theme }) => theme.colors.gray_600};
  border-radius: 6px;
`
export const ButtonInput = styled(animatedPressable)`
  padding: 8px;
  border-radius: 8px;
`

export const InputNumber = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.robotoRegular};
    font-size: ${theme.text_size.md}px;
    color: ${theme.colors.gray_100};
  `}
`
