import { dataListCoffee } from '../DataProducts/dataListCoffee'
import { useProductsStorage } from '../contexts/contextProductsStorage'
import { StackRoutesProps } from '../routes/stack.routes'
import { saveProductStorage } from '../storage/productCart/saveProductStorage'

import { DataListCoffeeProps, ProductStorage } from '@/types/dataListCoffeType'
import { useNavigation } from '@react-navigation/native'
import { useEffect, useState } from 'react'
import Toast from 'react-native-toast-message'

export const useProduct = (id: number) => {
  const sizeCoffee = [114, 140, 227]
  const [optionSelected, setOptionSelected] = useState<number | null>(null)
  const [quantityCoffee, setQuantityCoffee] = useState(1)
  const [dataCoffee, setDataCoffee] = useState<DataListCoffeeProps>(
    {} as DataListCoffeeProps,
  )
  const [priceCoffee, setPriceCoffee] = useState<number | null>(null)
  const { dataProductsCart, setProductCart } = useProductsStorage()

  const navigation = useNavigation<StackRoutesProps>()

  const handleSelectedOption = (size: number) => {
    if (size === optionSelected) {
      setOptionSelected(null)
      setPriceCoffee(dataCoffee.price)
      return
    }
    setOptionSelected(size)
    const newPrice = (dataCoffee.price / sizeCoffee[1]) * size
    setPriceCoffee(Number(newPrice.toFixed(2)))
  }

  const handleIncrementCoffee = () => {
    setQuantityCoffee((prevState) => prevState + 1)
  }

  const handleDecrementCoffee = () => {
    if (quantityCoffee === 1) return
    setQuantityCoffee((prevState) => prevState - 1)
  }

  const handleAddProductToCart = async () => {
    const productIsExists = dataProductsCart.some(
      (product) => product.data.id === dataCoffee.id,
    )
    if (productIsExists) return

    const newProduct: ProductStorage = {
      data: { ...dataCoffee, price: priceCoffee },
      quantity: quantityCoffee,
      size: optionSelected,
    }
    setProductCart([...dataProductsCart, newProduct])
    try {
      await saveProductStorage(newProduct)
    } catch (error) {
      console.log('erro ao adicionar produto no carrinho', error)
    }

    showToast(newProduct)
    navigation.navigate('home')
  }

  const showToast = (product: ProductStorage) => {
    Toast.show({
      type: 'productToast',
      props: {
        product,
      },
    })
  }
  const price = Number(priceCoffee * quantityCoffee).toFixed(2)

  useEffect(() => {
    const selectedProductForId = dataListCoffee.find((item) => item.id === id)
    setDataCoffee({ ...selectedProductForId })
    setPriceCoffee(selectedProductForId.price)
  }, [id])

  return {
    dataCoffee,
    price,
    sizeCoffee,
    optionSelected,
    handleSelectedOption,
    quantityCoffee,
    handleIncrementCoffee,
    handleDecrementCoffee,
    handleAddProductToCart,
  }
}
