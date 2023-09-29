import * as S from './styles'

import { useEffect, useState } from 'react'
import { BackHandler, Keyboard, TouchableWithoutFeedback } from 'react-native'

import { InputSearch } from '@/components/InputSearch'
import { ListCardHighLight } from '@/components/ListCardHighlight'
import { CatalogCoffee } from '@/components/CatalogCoffee'

import { MapPin, ShoppingCart } from 'phosphor-react-native'

import grainCoffeeImage from '@/assets/coffe.png'
import theme from '@/styles/theme'

import { dataListCoffee } from '@/dataListCoffee'

export const Home = () => {
  const [isFocused, setIsFocused] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const [dataList, setDataList] = useState(dataListCoffee)

  const handleFocusInput = () => {
    setIsFocused((prevState) => !prevState)
  }

  const handleBlurInput = () => {
    setIsFocused(false)
  }

  const handleSearchCoffee = () => {
    if (!inputValue.trim().length) return

    const productAlreadyExists = dataListCoffee.filter((item) =>
      item.name.toLowerCase().includes(inputValue.toLowerCase()),
    )

    if (productAlreadyExists.length) setDataList(productAlreadyExists)
    console.log(productAlreadyExists)
  }

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', () => {
      return true
    })
  }, [])

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <S.Container>
        <S.Header>
          <S.HeaderTopInfos>
            <S.ContentLocal>
              <MapPin color={theme.colors.purple} size={20} weight="fill" />
              <S.TextLocal>Porto Alegre, RS</S.TextLocal>
            </S.ContentLocal>
            <ShoppingCart color={theme.colors.yellow_dark} weight="fill" />
          </S.HeaderTopInfos>

          <S.TitleSearch>
            Encontre o café perfeito para qualquer hora do dia
          </S.TitleSearch>
          <InputSearch
            value={inputValue}
            onChangeText={setInputValue}
            isFocus={isFocused}
            onFocus={() => handleFocusInput()}
            onBlur={() => handleBlurInput()}
            onSubmitEditing={() => handleSearchCoffee()}
          />
          <S.ImageGrainCoffee source={grainCoffeeImage} />
        </S.Header>
        <ListCardHighLight data={dataList} />
        <CatalogCoffee />
      </S.Container>
    </TouchableWithoutFeedback>
  )
}
