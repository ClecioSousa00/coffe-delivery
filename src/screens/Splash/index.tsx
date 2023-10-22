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

import { useNavigation } from '@react-navigation/native'
import { StackRoutesProps } from '@/routes/stack.routes'

import Logo from '@/assets/logo.svg'
import LogoName from '@/assets/logoName.svg'

export const Splash = () => {
  const splashAnimation = useSharedValue(0)
  const navigation = useNavigation<StackRoutesProps>()
  const { height: screenHeight } = Dimensions.get('screen')

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
      width: interpolate(
        splashAnimation.value,
        [0, 50],
        [0, screenHeight + 100],
      ),
      height: interpolate(
        splashAnimation.value,
        [0, 50],
        [0, screenHeight + 100],
      ),
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
      <S.AnimatedCircle style={animatedStyleCircle} />
    </S.Container>
  )
}
