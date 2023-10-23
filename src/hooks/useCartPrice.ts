import { useEffect, useState } from 'react'
import { useProductsStorage } from '@/contexts/contextProductsStorage'
import { ProductStorage } from '@/types/dataListCoffeType'

export const useCartPrice = () => {
  const [productsPriceTotal, setProductsPriceTotal] = useState<number | null>(
    null,
  )
  const { dataProductsCart } = useProductsStorage()

  const calculateProductsPriceTotal = (products: ProductStorage[]) => {
    const totalPrice = products.reduce((acc, product) => {
      const price = product.data.price * product.quantity
      return price + acc
    }, 0)
    setProductsPriceTotal(Number(totalPrice.toFixed(2)))
  }

  const handleProductsPriceTotal = (price: number) => {
    const newPriceProduct = Number((productsPriceTotal + price).toFixed(2))
    setProductsPriceTotal(newPriceProduct)
  }

  useEffect(() => {
    if (!dataProductsCart.length) return
    calculateProductsPriceTotal(dataProductsCart)
  }, [dataProductsCart])

  return {
    dataProductsCart,
    handleProductsPriceTotal,
    productsPriceTotal,
  }
}
