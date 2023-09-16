import coffe1 from '../assets/Image-1.png'
import coffe2 from '../assets/Image-2.png'
import coffe3 from '../assets/Image-3.png'
import coffe4 from '../assets/Image-4.png'
import coffe5 from '../assets/Image-5.png'
import coffe6 from '../assets/Image-6.png'
import coffe7 from '../assets/Image-7.png'
import coffe8 from '../assets/Image-8.png'
import coffe9 from '../assets/Image-9.png'
import coffe10 from '../assets/Image-10.png'
import coffe11 from '../assets/Image-11.png'
import coffe12 from '../assets/Image-12.png'
import coffe13 from '../assets/Image-13.png'
import coffe14 from '../assets/Image-14.png'
import { DataListCoffeeProps } from './types/dataListCoffeType'

export const dataListCoffee: DataListCoffeeProps[] = [
  {
    type: 'Tradicional',
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 8.99,
    image: coffe1,
  },
  {
    type: 'Tradicional',
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 7.99,
    image: coffe2,
  },
  {
    type: 'Tradicional',
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    price: 9.49,
    image: coffe3,
  },
  {
    type: 'Tradicional',
    name: 'Latte',
    description: 'Café expresso com o dobro de leite e espuma cremosa',
    price: 10.29,
    image: coffe6,
  },
  {
    type: 'Tradicional',
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 8.79,
    image: coffe4,
  },
  {
    type: 'Tradicional',
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 9.99,
    image: coffe5,
  },
  {
    type: 'Tradicional',
    name: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    price: 9.79,
    image: coffe8,
  },
  {
    type: 'Doce',
    name: 'Cappuccino',
    description: 'Bebida com canela feita de doses de café, leite e espuma',
    price: 8.49,
    image: coffe7,
  },
  {
    type: 'Doce',
    name: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 9.59,
    image: coffe9,
  },
  {
    type: 'Doce',
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 7.89,
    image: coffe10,
  },
  {
    type: 'Especial',
    name: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 11.49,
    image: coffe11,
  },
  {
    type: 'Especial',
    name: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: 10.99,
    image: coffe12,
  },
  {
    type: 'Especial',
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 12.79,
    image: coffe13,
  },
  {
    type: 'Especial',
    name: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e Chantilly',
    price: 13.49,
    image: coffe14,
  },
]
