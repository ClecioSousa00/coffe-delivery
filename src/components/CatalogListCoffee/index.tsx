import {
  DataListCoffeeProps,
  TypeCoffeeProps,
} from '../../types/dataListCoffeType'
import { CardCatalogCoffee } from '../CardCatalogCoffee'
import * as S from './styles'

type Props = {
  title: string
  data: DataListCoffeeProps[]
  type: TypeCoffeeProps
}

export const CatalogListCoffee = ({ title, type, data }: Props) => {
  const generateCatalogType = (type: TypeCoffeeProps) => {
    const dataListFilteredType = data.filter((item) => item.type === type)
    return dataListFilteredType.map((item) => (
      <CardCatalogCoffee key={item.id} data={item} />
    ))
  }

  return (
    <S.Container>
      <S.CategoryText>{title}</S.CategoryText>
      {generateCatalogType(type)}
    </S.Container>
  )
}
