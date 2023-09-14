import * as S from './styles'
import { useCallback, useEffect } from 'react'
import { Dimensions } from 'react-native'

import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  interpolate,
  runOnJS,
} from 'react-native-reanimated'

import Logo from '../../assets/logo.svg'
import LogoName from '../../assets/logoName.svg'
import { useNavigation } from '@react-navigation/native'
import { StackType } from '../../routes/stack.routes'

export const Splash = () => {
  const splashAnimation = useSharedValue(0)
  const navigation = useNavigation<StackType>()
  const { width: screenWidth, height: screenHeight } = Dimensions.get('screen')
  const logoStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: interpolate(splashAnimation.value, [0, 50], [0, -50]),
        },
      ],
    }
  })
  const logoNameStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(splashAnimation.value, [0, 25, 50], [0, 0.3, 1]),
      transform: [
        {
          translateX: interpolate(splashAnimation.value, [0, 50], [100, 30]),
        },
      ],
    }
  })

  const animatedStyleCircle = useAnimatedStyle(() => {
    return {
      width: interpolate(splashAnimation.value, [0, 50], [0, screenWidth]),
      height: interpolate(splashAnimation.value, [0, 50], [0, screenHeight]),
    }
  })

  const startApp = useCallback(() => {
    navigation.navigate('home')
  }, [navigation])

  useEffect(() => {
    splashAnimation.value = withTiming(50, { duration: 1000 }, () => {
      'worklet'
      runOnJS(startApp)()
    })
  }, [splashAnimation, startApp])

  return (
    <S.Container>
      <S.ContentLogo>
        <Animated.View style={logoStyle}>
          <Logo />
        </Animated.View>

        <Animated.View style={[logoNameStyle, { position: 'absolute' }]}>
          <LogoName />
        </Animated.View>
      </S.ContentLogo>
      <S.Circle style={animatedStyleCircle} />
    </S.Container>
  )
}
