import * as S from './styles'
import {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  interpolateColor,
} from 'react-native-reanimated'

import { PressableProps } from 'react-native'
import { useEffect } from 'react'
import { useTheme } from 'styled-components/native'

export type ButtonProps = {
  text: string
  isActive?: boolean
} & PressableProps

export const TagCatalogCoffee = ({
  text,
  isActive = false,
  ...rest
}: ButtonProps) => {
  const theme = useTheme()

  const active = useSharedValue(0)

  const animatedButtonStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: interpolateColor(
        active.value,
        [0, 1],
        ['transparent', theme.colors.purple],
      ),
      borderColor: interpolateColor(
        active.value,
        [0, 1],
        [theme.colors.purple, 'transparent'],
      ),
    }
  })

  const animatedTextStyle = useAnimatedStyle(() => {
    return {
      color: interpolateColor(
        active.value,
        [0, 1],
        [theme.colors.purple_dark, theme.colors.white],
      ),
    }
  })

  useEffect(() => {
    active.value = withTiming(isActive ? 0 : 1)
  }, [isActive, active])

  return (
    <S.ButtonCategory style={animatedButtonStyle} isActive={isActive} {...rest}>
      <S.TextButton style={animatedTextStyle} isActive={isActive}>
        {text}
      </S.TextButton>
    </S.ButtonCategory>
  )
}
