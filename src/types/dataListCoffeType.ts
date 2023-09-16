import { ImageSourcePropType } from 'react-native'

export type DataListCoffeeProps = {
  id: number
  type: string
  name: string
  description: string
  price: number
  image: ImageSourcePropType
}
