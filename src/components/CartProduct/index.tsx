import { Trash } from 'phosphor-react-native'
import { ButtonCounter } from '../ButtonCounter'
import * as S from './styles'

import img from '@/assets/Image-1.png'
import { useTheme } from 'styled-components/native'
import { ButtonIcon } from '../ButtonIcon'
import { ProductStorage } from '@/types/dataListCoffeType'
import { useEffect, useState } from 'react'

type Props = {
  product: ProductStorage
  handleTotalPrice: (price: number) => void
}

export const CartProduct = ({ product, handleTotalPrice }: Props) => {
  const theme = useTheme()
  const [quantity, setQuantity] = useState(product.quantity)
  // const [priceCoffee, setPriceCoffee] = useState(product.data.price)

  const handleIncrementCoffee = () => {
    setQuantity((prevState) => prevState + 1)
    handleTotalPrice(product.data.price)

    // const newPrice = product.data.price + priceCoffee
    // setPriceCoffee(Number(newPrice.toFixed(2)))
  }

  const handleDecrementCoffee = () => {
    if (quantity === 1) return
    setQuantity((prevState) => prevState - 1)
    handleTotalPrice(product.data.price * -1)

    // const newPrice = priceCoffee - product.data.price
    // setPriceCoffee(Number(newPrice.toFixed(2)))
  }

  // useEffect(() => {
  //   const price = Number((product.data.price * quantity).toFixed(2))

  //   handleTotalPrice(price)
  // }, [quantity])

  // useEffect(() => {
  //   if (product.quantity > 1) {
  //     const newPrice = product.data.price * quantity
  //     setPriceCoffee(Number(newPrice.toFixed(2)))
  //   }
  // }, [quantity])

  const price = Number((product.data.price * quantity).toFixed(2))

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
          <ButtonIcon isSelected>
            <Trash color={theme.colors.purple} size={20} />
          </ButtonIcon>
        </S.ContentFooter>
      </S.Infos>
    </S.Container>
  )
}
