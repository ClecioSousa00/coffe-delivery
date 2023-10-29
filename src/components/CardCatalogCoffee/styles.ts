import styled, { css } from 'styled-components/native'
import { TouchableOpacity, TouchableOpacityProps } from 'react-native'
import Animated from 'react-native-reanimated'

const animatedTouchableOpacity =
  Animated.createAnimatedComponent(TouchableOpacity)

export const Container = styled(
  animatedTouchableOpacity,
)<TouchableOpacityProps>`
  width: 312px;
  height: 112px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  background-color: ${({ theme }) => theme.colors.gray_800};

  border-top-left-radius: 6px;
  border-top-right-radius: 36px;
  border-bottom-right-radius: 6px;
  border-bottom-left-radius: 36px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.gray_700};

  padding: 0px 16px 16px 8px;
`

export const ImageCoffee = styled.Image`
  margin-top: -40px;
  width: 82px;
  height: 82px;
`

export const Content = styled.View`
  flex: 1;
`

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.balooBold};
    font-size: ${theme.title_size.sm}px;
    color: ${theme.colors.gray_200};
  `}
`

export const Description = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.robotoRegular};
    font-size: ${theme.text_size.xs}px;
    color: ${theme.colors.gray_400};
  `}
`
export const ContentPrice = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 2px;
  margin-top: 8px;
`
export const TextPrice = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.robotoRegular};
    font-size: ${theme.text_size.sm}px;
    color: ${theme.colors.yellow_dark};
  `}
`
export const NumberPrice = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.balooBold};
    font-size: ${theme.text_size.md}px;
    color: ${theme.colors.yellow_dark};
  `}
`
