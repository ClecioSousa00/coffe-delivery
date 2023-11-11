import { DataListCoffeeProps } from '@/types/dataListCoffeType'
import coffee from '../../src/assets/Image-1.png'
import { AddressStorageProps } from '../types/addressStorage'

const product: DataListCoffeeProps = {
  id: 1,
  type: 'tradicional',
  name: 'Expresso Tradicional',
  description: 'O tradicional café feito com água quente e grãos moídos',
  price: 8.99,
  image: coffee,
}

const listProducts: DataListCoffeeProps[] = [
  {
    id: 1,
    type: 'tradicional',
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 8.99,
    image: coffee,
  },
  {
    id: 2,
    type: 'tradicional',
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 7.99,
    image: coffee,
  },
]

const address: AddressStorageProps = {
  city: 'Santa Terezinha',
  state: 'PE',
}

export const mocks = {
  product,
  listProducts,
  address,
}
