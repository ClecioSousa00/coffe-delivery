import * as S from './styles'

import { ScrollView, StatusBar, View } from 'react-native'

import { useNavigation } from '@react-navigation/native'
import { StackRoutesProps } from '@/routes/stack.routes'

import { CartProduct } from '@/screens/Cart/components/CartProduct'
import { Button } from '@/components/Button'
import { HeaderScreen } from '@/components/HeaderScreen'

import { useTheme } from 'styled-components/native'

import { ShoppingCart } from 'phosphor-react-native'

import Animated, {
  Layout,
  SlideInRight,
  SlideOutRight,
} from 'react-native-reanimated'
import { useCartPrice } from '@/hooks/useCartPrice'

export const Cart = () => {
  const theme = useTheme()
  const navigation = useNavigation<StackRoutesProps>()
  const { dataProductsCart, handleProductsPriceTotal, productsPriceTotal } =
    useCartPrice()

  return (
    <S.Container>
      <StatusBar
        translucent
        barStyle="dark-content"
        backgroundColor="transparent"
      />
      <View style={{ paddingHorizontal: 32, marginBottom: 28 }}>
        <HeaderScreen title="Carrinho" />
      </View>
      {dataProductsCart.length ? (
        <>
          <ScrollView contentContainerStyle={{ paddingBottom: 162 }}>
            {dataProductsCart.map((product) => (
              <Animated.View
                key={product.data.id}
                entering={SlideInRight}
                exiting={SlideOutRight}
                layout={Layout.springify()}
              >
                <CartProduct
                  product={product}
                  handleTotalPrice={handleProductsPriceTotal}
                />
              </Animated.View>
            ))}
          </ScrollView>

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
              <S.Price>R$ {productsPriceTotal}</S.Price>
            </S.ContentHeader>
            <Button
              onPress={() => navigation.navigate('address')}
              text="confirmar pedido"
              color={theme.colors.yellow_dark}
            />
          </S.Footer>
        </>
      ) : (
        <S.ContainerEmptyMessage>
          <ShoppingCart color={theme.colors.gray_500} weight="fill" />
          <S.TextEmptyMessage>Seu carrinho está vazio</S.TextEmptyMessage>
          <Button
            text="ver catálogo"
            onPress={() => navigation.navigate('home')}
          />
        </S.ContainerEmptyMessage>
      )}
    </S.Container>
  )
}
