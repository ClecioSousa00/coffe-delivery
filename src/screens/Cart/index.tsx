import * as S from './styles'

import { ActivityIndicator, FlatList } from 'react-native'

import { useNavigation } from '@react-navigation/native'

import { CartProduct } from '@/components/CartProduct'
import { Button } from '@/components/Button'

import { ArrowLeft } from 'phosphor-react-native'

import { useTheme } from 'styled-components/native'
import { useEffect, useState } from 'react'
import { ProductStorage } from '@/types/dataListCoffeType'
import { getAllProductsStorage } from '@/storage/productCart/getAllProductsStorage'

export const Cart = () => {
  const theme = useTheme()
  const navigation = useNavigation()
  const [products, setProducts] = useState<ProductStorage[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [productsPriceTotal, setProductsPriceTotal] = useState<number | null>(
    null,
  )

  const calculateProductsPriceTotal = (products: ProductStorage[]) => {
    const totalPrice = products.reduce((acc, product) => {
      const price = product.data.price * product.quantity
      return price + acc
    }, 0)
    return totalPrice
  }

  const getProductStorage = async () => {
    setIsLoading(true)
    try {
      const storageProducts = await getAllProductsStorage()
      setProducts(storageProducts)
      const totalPrice = calculateProductsPriceTotal(storageProducts)
      setProductsPriceTotal(Number(totalPrice.toFixed(2)))
    } catch (error) {
      console.log('erro ao pegar produtos no storage', error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleProductsPriceTotal = (price: number) => {
    const newPriceProduct = Number((productsPriceTotal + price).toFixed(2))
    setProductsPriceTotal(newPriceProduct)
  }

  useEffect(() => {
    getProductStorage()
  }, [])

  return (
    <S.Container>
      <S.Header>
        <S.ButtonBack onPress={() => navigation.goBack()}>
          <ArrowLeft color={theme.colors.gray_100} />
        </S.ButtonBack>
        <S.Title>Carrinho</S.Title>
      </S.Header>
      {isLoading ? (
        <ActivityIndicator size="large" />
      ) : (
        <FlatList
          data={products}
          keyExtractor={(item) => String(item.data.id)}
          renderItem={({ item }) => (
            <CartProduct
              product={item}
              handleTotalPrice={handleProductsPriceTotal}
            />
          )}
          contentContainerStyle={{ paddingBottom: 162 }}
        />
      )}

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
        <Button text="confirmar pedido" color={theme.colors.yellow_dark} />
      </S.Footer>
    </S.Container>
  )
}
