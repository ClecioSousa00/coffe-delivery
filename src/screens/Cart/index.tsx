import * as S from './styles'

import { FlatList } from 'react-native'

import { useNavigation } from '@react-navigation/native'

import { CartProduct } from '@/components/CartProduct'
import { Button } from '@/components/Button'

import { ArrowLeft } from 'phosphor-react-native'

import { useTheme } from 'styled-components/native'

export const Cart = () => {
  const theme = useTheme()
  const navigation = useNavigation()

  return (
    <S.Container>
      <S.Header>
        <S.ButtonBack onPress={() => navigation.goBack()}>
          <ArrowLeft color={theme.colors.gray_100} />
        </S.ButtonBack>
        <S.Title>Carrinho</S.Title>
      </S.Header>
      <FlatList
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
        keyExtractor={(item) => String(item)}
        renderItem={() => <CartProduct />}
        contentContainerStyle={{ paddingBottom: 162 }}
      />

      <S.Footer
        style={{
          elevation: 20,
          shadowColor: '#000',
          shadowOffset: {
            height: 20,
            width: 0,
          },
          shadowOpacity: 0.1,
        }}
      >
        <S.ContentHeader>
          <S.TitleFooter>Valor Total</S.TitleFooter>
          <S.Price>R$ 9,90</S.Price>
        </S.ContentHeader>
        <Button text="confirmar pedido" color={theme.colors.yellow_dark} />
      </S.Footer>
    </S.Container>
  )
}
