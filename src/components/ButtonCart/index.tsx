import * as S from './styles'

import { useNavigation } from '@react-navigation/native'

import { StackRoutesProps } from '@/routes/stack.routes'

import { useTheme } from 'styled-components/native'

import { ShoppingCart } from 'phosphor-react-native'
import { useState } from 'react'

export const ButtonCart = () => {
  const theme = useTheme()
  const navigation = useNavigation<StackRoutesProps>()
  const [quatity, setQuantity] = useState<number | null>(null)

  return (
    <S.Button onPress={() => navigation.navigate('cart')}>
      <S.Content>
        <S.Quantity>3</S.Quantity>
      </S.Content>
      <ShoppingCart color={theme.colors.yellow_dark} weight="fill" />
    </S.Button>
  )
}
