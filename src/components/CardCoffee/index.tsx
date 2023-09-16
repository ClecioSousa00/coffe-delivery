import * as S from './styles'

import DropShadow from 'react-native-drop-shadow'

import { DataListCoffeeProps } from '../../types/dataListCoffeType'

import theme from '../../styles/theme'

type CardCoffeeProps = {
  data: DataListCoffeeProps
}

export const CardCoffee = ({ data }: CardCoffeeProps) => {
  return (
    <S.Container
      style={{
        elevation: 7,
        shadowColor: '#000',
        shadowOffset: {
          height: 6,
          width: 6,
        },
        shadowOpacity: 0.6,
      }}
    >
      <S.ImageCoffee source={data.image} />
      <S.TypeContent>
        <S.TextType>{data.type}</S.TextType>
      </S.TypeContent>
      <S.TextName>{data.name}</S.TextName>
      <S.TextDescription>{data.description}</S.TextDescription>
      <S.ContentPrice>
        <S.TextPrice>R$</S.TextPrice>
        <S.NumberPrice>{data.price}</S.NumberPrice>
      </S.ContentPrice>
    </S.Container>
  )
}
