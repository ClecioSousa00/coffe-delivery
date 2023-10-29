import * as S from './styles'

import { useTheme } from 'styled-components/native'

import { ShoppingCart } from 'phosphor-react-native'

import { TouchableOpacityProps } from 'react-native'

type ButtonCartProps = {
  quantityProducts: number
} & TouchableOpacityProps

export const ButtonCart = ({ quantityProducts, ...rest }: ButtonCartProps) => {
  const theme = useTheme()

  const color = quantityProducts
    ? theme.colors.purple
    : theme.colors.yellow_dark
  return (
    <S.Button {...rest}>
      {quantityProducts > 0 && (
        <S.Content testID="content-quantity">
          <S.Quantity>{quantityProducts}</S.Quantity>
        </S.Content>
      )}
      <ShoppingCart color={color} weight="fill" />
    </S.Button>
  )
}
