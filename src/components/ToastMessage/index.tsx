import * as S from './styles'

import { useNavigation } from '@react-navigation/native'

import { ArrowRight, ShoppingCart } from 'phosphor-react-native'

import { useTheme } from 'styled-components/native'

import { StackRoutesProps } from '@/routes/stack.routes'
import { ToastProps } from '@/routes'

export const ToastMessage = ({ props }: ToastProps) => {
  const theme = useTheme()
  const navigation = useNavigation<StackRoutesProps>()
  const { product } = props

  const singularOrPlural = product.quantity > 1 ? 'cafés' : 'café'

  return (
    <S.Container>
      <S.ButtonCart>
        <ShoppingCart size={20} color={theme.colors.white} weight="fill" />
        <S.Counter>
          <S.CounterText>{product.quantity}</S.CounterText>
        </S.Counter>
      </S.ButtonCart>
      <S.Text>
        {product.quantity} {singularOrPlural} {product.data.name} de{' '}
        {product.size}ml {'\n'} adicionado ao carrinho
      </S.Text>
      <S.Button
        testID="button-navigate"
        onPress={() => navigation.navigate('cart')}
      >
        <S.ButtonText>ver</S.ButtonText>
        <ArrowRight size={16} color={theme.colors.purple} />
      </S.Button>
    </S.Container>
  )
}
