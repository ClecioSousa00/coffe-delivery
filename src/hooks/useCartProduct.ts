import { useState } from 'react'
import { useProductsStorage } from '@/contexts/contextProductsStorage'
import { saveAllProductsStorage } from '@/storage/productCart/saveAllProductStorage'
import { ProductStorage } from '@/types/dataListCoffeType'

type Props = {
  product: ProductStorage
  handleTotalPrice: (price: number) => void
}

export const useCardProduct = ({ product, handleTotalPrice }: Props) => {
  const [quantity, setQuantity] = useState(product.quantity)
  const { dataProductsCart, setProductCart } = useProductsStorage()

  const handleIncrementCoffee = () => {
    setQuantity((prevState) => prevState + 1)
    handleTotalPrice(product.data.price)
  }

  const handleDecrementCoffee = () => {
    if (quantity === 1) return
    setQuantity((prevState) => prevState - 1)
    handleTotalPrice(product.data.price * -1)
  }

  const handleRemoveProduct = async (id: number) => {
    const productsFiltered = dataProductsCart.filter(
      (product) => product.data.id !== id,
    )
    setProductCart(productsFiltered)
    try {
      await saveAllProductsStorage(productsFiltered)
    } catch (error) {
      console.log('erro ao remover produto da lista')
    }
  }

  return {
    quantity,
    handleIncrementCoffee,
    handleDecrementCoffee,
    handleRemoveProduct,
  }
}
