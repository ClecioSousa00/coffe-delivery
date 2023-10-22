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
  isActive: boolean
} & PressableProps

export const TagCatalogCoffee = ({
  text,
  isActive = false,
  ...rest
}: ButtonProps) => {
  const theme = useTheme()
  const scale = useSharedValue(1)
  const active = useSharedValue(0)

  const animatedButtonStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
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

  const onPressIn = () => {
    scale.value = withTiming(1.1)
  }
  const onPressOut = () => {
    scale.value = withTiming(1)
  }

  useEffect(() => {
    active.value = withTiming(isActive ? 0 : 1)
    console.log('executou')
  }, [isActive, active])

  return (
    <S.ButtonCategory
      style={animatedButtonStyle}
      isActive={isActive}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      {...rest}
    >
      <S.TextButton style={animatedTextStyle} isActive={isActive}>
        {text}
      </S.TextButton>
    </S.ButtonCategory>
  )
}
