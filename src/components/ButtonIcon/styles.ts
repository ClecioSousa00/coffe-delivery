import styled, { css } from 'styled-components/native'
import { ButtonIconProps } from './'
import { Pressable, TouchableOpacity } from 'react-native'
import Animated from 'react-native-reanimated'

const animatedPressable = Animated.createAnimatedComponent(Pressable)

export const Button = styled(animatedPressable)`
  border-radius: 6px;
  padding: 8px;
`
