import * as S from './styles'

import { useNavigation } from '@react-navigation/native'

import { StackRoutesProps } from '@/routes/stack.routes'

import { useTheme } from 'styled-components/native'

import { ShoppingCart } from 'phosphor-react-native'

import { useProductsStorage } from '@/contexts/contextProductsStorage'

export const ButtonCart = () => {
  const theme = useTheme()
  const navigation = useNavigation<StackRoutesProps>()
  const { dataProductsCart } = useProductsStorage()

  const color = dataProductsCart.length
    ? theme.colors.purple
    : theme.colors.yellow_dark
  return (
    <S.Button onPress={() => navigation.navigate('cart')}>
      {dataProductsCart.length > 0 && (
        <S.Content>
          <S.Quantity>{dataProductsCart.length}</S.Quantity>
        </S.Content>
      )}
      <ShoppingCart color={color} weight="fill" />
    </S.Button>
  )
}
