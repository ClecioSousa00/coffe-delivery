import { DataListCoffeeProps } from '../../types/dataListCoffeType'
import * as S from './styles'

type Props = {
  data: DataListCoffeeProps
}

export const CardCatalogCoffee = ({ data }: Props) => {
  return (
    <S.Container
      style={{
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: {
          height: 6,
          width: 6,
        },
        shadowOpacity: 0.6,
      }}
    >
      <S.ImageCoffee source={data.image} />
      <S.Content>
        <S.Title>{data.name}</S.Title>
        <S.Description>{data.description}</S.Description>
        <S.ContentPrice>
          <S.TextPrice>R$</S.TextPrice>
          <S.NumberPrice>{data.price}</S.NumberPrice>
        </S.ContentPrice>
      </S.Content>
    </S.Container>
  )
}
