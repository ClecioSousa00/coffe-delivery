import { DataListCoffeeProps, ProductStorage } from '@/types/dataListCoffeType'
import coffee from '../../src/assets/Image-1.png'
import { AddressStorageProps } from '../types/addressStorage'
import { FormProps } from '@/screens/Address/types'

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

const productsStorage: ProductStorage[] = [
  {
    data: {
      id: 1,
      type: 'tradicional',
      name: 'Expresso Tradicional',
      description: 'O tradicional café feito com água quente e grãos moídos',
      price: 8.99,
      image: coffee,
    },
    quantity: 1,
    size: 227,
  },
  {
    data: {
      id: 2,
      type: 'tradicional',
      name: 'Expresso Americano',
      description: 'Expresso diluído, menos intenso que o tradicional',
      price: 7.99,
      image: coffee,
    },
    quantity: 2,
    size: 114,
  },
]

const addressMock: FormProps = {
  city: 'São Paulo',
  district: 'Sé',
  number: '11',
  state: 'SP',
  street: 'lado ímpar',
  zipCode: '01001000',
}

export const mocks = {
  product,
  listProducts,
  address,
  productsStorage,
  addressMock,
}
