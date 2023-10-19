import * as S from './styles'

import { useNavigation } from '@react-navigation/native'

import { StackRoutesProps } from '@/routes/stack.routes'

import { Button } from '@/components/Button'

import Illustration from '@/assets/Illustration.svg'
import { useTheme } from 'styled-components/native'

export const PurchaseCompleted = () => {
  const navigation = useNavigation<StackRoutesProps>()
  const theme = useTheme()

  return (
    <S.Container>
      <Illustration />
      <S.Title>Uhu! Pedido confirmado</S.Title>
      <S.SubTitle>
        Agora é só aguardar que logo o café {'\n'}
        chegará até você!
      </S.SubTitle>
      <S.ContainerButton>
        <Button
          text="ir para a home"
          color={theme.colors.purple_dark}
          onPress={() => navigation.navigate('home')}
        />
      </S.ContainerButton>
    </S.Container>
  )
}
