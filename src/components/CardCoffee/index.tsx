import * as S from './styles'
import { DataListCoffeeProps } from '../../types/dataListCoffeType'

import img from '../../assets/Image-1.png'

type CardCoffeeProps = {
  data: DataListCoffeeProps
}

export const CardCoffee = () => {
  return (
    <S.Container>
      <S.ImageCoffee source={img} />
      <S.TypeContent>
        <S.TextType>Tradicional</S.TextType>
      </S.TypeContent>
      <S.TextName>Latte</S.TextName>
      <S.TextDescription>
        Café expresso com o dobro de leite e espuma cremosa
      </S.TextDescription>
      <S.ContentPrice>
        <S.TextPrice>R$</S.TextPrice>
        <S.NumberPrice>9,90</S.NumberPrice>
      </S.ContentPrice>
    </S.Container>
  )
}
