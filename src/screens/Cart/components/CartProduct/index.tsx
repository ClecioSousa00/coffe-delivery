import * as S from './styles'
import { Trash } from 'phosphor-react-native'
import { ButtonCounter } from '../../../../components/ButtonCounter'

import { useTheme } from 'styled-components/native'
import { ButtonIcon } from '../../../../components/ButtonIcon'
import { ProductStorage } from '@/types/dataListCoffeType'

import { useCardProduct } from '@/hooks/useCartProduct'
import { SwipeableButton } from '@/screens/Cart/components/SwipeableButton'
import { Swipeable } from 'react-native-gesture-handler'

type Props = {
  product: ProductStorage
  handleTotalPrice: (price: number) => void
}

export const CartProduct = ({ product, handleTotalPrice }: Props) => {
  const theme = useTheme()
  const {
    quantity,
    handleIncrementCoffee,
    handleDecrementCoffee,
    handleRemoveProduct,
  } = useCardProduct({ product, handleTotalPrice })

  const price = Number((product.data.price * quantity).toFixed(2))

  return (
    <Swipeable
      overshootLeft={false}
      onSwipeableOpen={() => handleRemoveProduct(product.data.id)}
      renderLeftActions={() => <SwipeableButton />}
      renderRightActions={() => null}
    >
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
    </Swipeable>
  )
}
