import { DataListCoffeeProps } from '@/types/dataListCoffeType'
import coffee from '../../src/assets/Image-1.png'

const product: DataListCoffeeProps = {
  id: 1,
  type: 'tradicional',
  name: 'Expresso Tradicional',
  description: 'O tradicional café feito com água quente e grãos moídos',
  price: 8.99,
  image: coffee,
}

export const mocks = {
  product,
}
