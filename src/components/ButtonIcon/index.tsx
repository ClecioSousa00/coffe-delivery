import * as S from './styles'
import { ReactNode } from 'react'
import { Pressable, PressableProps } from 'react-native'
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated'

import { useTheme } from 'styled-components/native'

export type ButtonIconProps = {
  children: ReactNode
  isSelected: boolean
} & PressableProps

const AnimatedPressable = Animated.createAnimatedComponent(Pressable)

export const ButtonIcon = ({
  children,
  isSelected,
  ...rest
}: ButtonIconProps) => {
  const theme = useTheme()
  const buttonStyle = useSharedValue(isSelected ? 1 : 0)

  const animatedButtonStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: interpolateColor(
        buttonStyle.value,
        [0, 1],
        ['transparent', theme.colors.gray_700],
      ),
    }
  })

  const onPressIn = () => {
    buttonStyle.value = withTiming(1)
  }
  const onPressOut = () => {
    buttonStyle.value = withTiming(0)
  }
  return (
    <AnimatedPressable
      testID={'button-icon'}
      style={[animatedButtonStyle, { padding: 8, borderRadius: 6 }]}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      {...rest}
    >
      {children}
    </AnimatedPressable>
  )
}
