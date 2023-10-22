import theme from '@/styles/theme'
import * as S from './styles'
import { ReactNode } from 'react'
import { TouchableOpacityProps } from 'react-native'
import {
  Easing,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated'

export type ButtonIconProps = {
  children: ReactNode
  isSelected: boolean
} & TouchableOpacityProps

export const ButtonIcon = ({
  children,
  isSelected,
  ...rest
}: ButtonIconProps) => {
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
    <S.Button
      {...rest}
      style={animatedButtonStyle}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
    >
      {children}
    </S.Button>
  )
}
