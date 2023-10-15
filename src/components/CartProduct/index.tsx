import { Trash } from 'phosphor-react-native'
import { ButtonCounter } from '../ButtonCounter'
import * as S from './styles'

import { useTheme } from 'styled-components/native'
import { ButtonIcon } from '../ButtonIcon'
import { ProductStorage } from '@/types/dataListCoffeType'
import { useState } from 'react'
import { useProductsStorage } from '@/contexts/contextProductsStorage'
import { saveAllProductsStorage } from '@/storage/productCart/saveAllProductStorage'

type Props = {
  product: ProductStorage
  handleTotalPrice: (price: number) => void
}

export const CartProduct = ({ product, handleTotalPrice }: Props) => {
  const theme = useTheme()
  const [quantity, setQuantity] = useState(product.quantity)
  const { dataProductsCart, setProductCart } = useProductsStorage()

  const handleIncrementCoffee = () => {
    setQuantity((prevState) => prevState + 1)
    handleTotalPrice(product.data.price)
  }

  const handleDecrementCoffee = () => {
    if (quantity === 1) return
    setQuantity((prevState) => prevState - 1)
    handleTotalPrice(product.data.price * -1)
  }

  const price = Number((product.data.price * quantity).toFixed(2))

  const handleRemoveProduct = async (id: number) => {
    const productsFiltered = dataProductsCart.filter(
      (product) => product.data.id !== id,
    )
    setProductCart(productsFiltered)
    try {
      await saveAllProductsStorage(productsFiltered)
    } catch (error) {
      console.log('erro ao remover produto da lista')
    }
  }

  return (
    <S.Container>
      <S.ImageCoffee source={product.data.image} />
      <S.Infos>
        <S.ContentHeader>
          <S.Title>{product.data.name}</S.Title>
          <S.Price>R$ {price}</S.Price>
        </S.ContentHeader>
        <S.Size>{product.size}ml</S.Size>
        <S.ContentFooter>
          <ButtonCounter
            quantity={quantity}
            handleDecrement={() => handleDecrementCoffee()}
            handleIncrement={() => handleIncrementCoffee()}
          />
          <ButtonIcon
            isSelected
            onPress={() => handleRemoveProduct(product.data.id)}
          >
            <Trash color={theme.colors.purple} size={20} />
          </ButtonIcon>
        </S.ContentFooter>
      </S.Infos>
    </S.Container>
  )
}
