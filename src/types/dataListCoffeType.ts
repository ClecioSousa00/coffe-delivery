import { ImageSourcePropType } from 'react-native'

export type TagCoffeeProps = {
  type: 'tradicionais' | 'doces' | 'especiais'
}

export type TypeCoffeeProps = 'tradicional' | 'doce' | 'especial'

export type DataListCoffeeProps = {
  id: number
  type: TypeCoffeeProps
  name: string
  description: string
  price: number
  image: ImageSourcePropType
}
