import * as S from './styles'

import { FlatList, StatusBar, View } from 'react-native'

import { useNavigation } from '@react-navigation/native'

import { CartProduct } from '@/components/CartProduct'
import { Button } from '@/components/Button'

import { useTheme } from 'styled-components/native'
import { useEffect, useState } from 'react'
import { ProductStorage } from '@/types/dataListCoffeType'

import { useProductsStorage } from '@/contexts/contextProductsStorage'
import { StackRoutesProps } from '@/routes/stack.routes'
import { HeaderScreen } from '@/components/HeaderScreen'

export const Cart = () => {
  const theme = useTheme()
  const navigation = useNavigation<StackRoutesProps>()

  const [productsPriceTotal, setProductsPriceTotal] = useState<number | null>(
    null,
  )
  const { dataProductsCart } = useProductsStorage()
  console.log(dataProductsCart)

  const calculateProductsPriceTotal = (products: ProductStorage[]) => {
    const totalPrice = products.reduce((acc, product) => {
      const price = product.data.price * product.quantity
      return price + acc
    }, 0)
    setProductsPriceTotal(totalPrice)
  }

  const handleProductsPriceTotal = (price: number) => {
    const newPriceProduct = Number((productsPriceTotal + price).toFixed(2))
    setProductsPriceTotal(newPriceProduct)
  }

  useEffect(() => {
    calculateProductsPriceTotal(dataProductsCart)
    console.log(calculateProductsPriceTotal(dataProductsCart))
  }, [dataProductsCart])

  return (
    <S.Container>
      <StatusBar
        translucent
        barStyle="dark-content"
        backgroundColor="transparent"
      />
      <View style={{ paddingHorizontal: 32 }}>
        <HeaderScreen title="Carrinho" />
      </View>
      <FlatList
        data={dataProductsCart}
        keyExtractor={(item) => String(item.data.id)}
        renderItem={({ item }) => (
          <CartProduct
            product={item}
            handleTotalPrice={handleProductsPriceTotal}
          />
        )}
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
          <S.Price>R$ {productsPriceTotal && productsPriceTotal}</S.Price>
        </S.ContentHeader>
        <Button
          onPress={() => navigation.navigate('address')}
          text="confirmar pedido"
          color={theme.colors.yellow_dark}
        />
      </S.Footer>
    </S.Container>
  )
}
