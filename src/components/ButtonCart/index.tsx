import * as S from './styles'

import { useNavigation } from '@react-navigation/native'

import { StackRoutesProps } from '@/routes/stack.routes'

import { useTheme } from 'styled-components/native'

import { ShoppingCart } from 'phosphor-react-native'
import { useEffect, useState } from 'react'
import { getAllProductsStorage } from '@/storage/productCart/getAllProductsStorage'

export const ButtonCart = () => {
  const theme = useTheme()
  const navigation = useNavigation<StackRoutesProps>()
  const [quantity, setQuantity] = useState<number | null>(null)

  const getQuantityProductsStorage = async () => {
    const storageProducts = await getAllProductsStorage()
    setQuantity(storageProducts.length)
  }

  useEffect(() => {
    getQuantityProductsStorage()
  }, [])

  const color = quantity ? theme.colors.purple : theme.colors.yellow_dark
  return (
    <S.Button onPress={() => navigation.navigate('cart')}>
      {quantity && (
        <S.Content>
          <S.Quantity>{quantity}</S.Quantity>
        </S.Content>
      )}
      <ShoppingCart color={color} weight="fill" />
    </S.Button>
  )
}
