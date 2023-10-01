import { ArrowLeft } from 'phosphor-react-native'
import * as S from './styles'
import { useTheme } from 'styled-components/native'
import { CartProduct } from '@/components/CartProduct'
export const Cart = () => {
  const theme = useTheme()

  return (
    <S.Container>
      <S.Header>
        <S.ButtonBack>
          <ArrowLeft color={theme.colors.gray_100} />
        </S.ButtonBack>
        <S.Title>Carrinho</S.Title>
      </S.Header>
      <CartProduct />
    </S.Container>
  )
}
