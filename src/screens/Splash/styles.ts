import Animated from 'react-native-reanimated'
import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.purple_dark};
`
export const ContentLogo = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: center;
  position: relative;
`
export const AnimatedCircle = styled(Animated.View)`
  background-color: ${({ theme }) => theme.colors.purple};
  width: 0px;
  height: 0px;
  position: absolute;
  z-index: -1;
  border-radius: 999px;
`
