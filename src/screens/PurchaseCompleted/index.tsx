import * as S from './styles'

import { useNavigation } from '@react-navigation/native'

import { StackRoutesProps } from '@/routes/stack.routes'

import { Button } from '@/components/Button'

import Illustration from '@/assets/Illustration.svg'
import { useTheme } from 'styled-components/native'
import Animated, {
  BounceInLeft,
  FadeInDown,
  ZoomInEasyDown,
} from 'react-native-reanimated'

export const PurchaseCompleted = () => {
  const navigation = useNavigation<StackRoutesProps>()
  const theme = useTheme()

  return (
    <S.Container>
      <Animated.View entering={BounceInLeft.delay(400)}>
        <Illustration />
      </Animated.View>
      <Animated.View entering={FadeInDown.delay(300)}>
        <S.Title>Uhu! Pedido confirmado</S.Title>
        <S.SubTitle>
          Agora é só aguardar que logo o café {'\n'}
          chegará até você!
        </S.SubTitle>
      </Animated.View>
      <Animated.View entering={ZoomInEasyDown.delay(500)}>
        <S.ContainerButton>
          <Button
            text="ir para a home"
            color={theme.colors.purple_dark}
            onPress={() => navigation.navigate('home')}
          />
        </S.ContainerButton>
      </Animated.View>
    </S.Container>
  )
}
