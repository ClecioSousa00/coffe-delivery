import * as S from './styles'

import { useCallback, useEffect, useState } from 'react'
import { BackHandler, Keyboard, TouchableWithoutFeedback } from 'react-native'
import { useFocusEffect } from '@react-navigation/native'
import Animated, { FadeInDown } from 'react-native-reanimated'

import { InputSearch } from '@/components/InputSearch'
import { ListCardHighLight } from './components/ListCardHighlight'
import { CatalogCoffee } from './components/CatalogCoffee'
import { ButtonCart } from '@/components/ButtonCart'

import { MapPin } from 'phosphor-react-native'

import grainCoffeeImage from '@/assets/coffe.png'
import theme from '@/styles/theme'

import { dataListCoffee } from '@/DataProducts/dataListCoffee'
import { getAddressStorage } from '@/storage/addressStorage/getAddressStorage'
import { AddressStorageProps } from '@/types/addressStorage'

export const Home = () => {
  const [isFocused, setIsFocused] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const [dataList, setDataList] = useState(dataListCoffee)
  const [address, setAddress] = useState<AddressStorageProps>(
    {} as AddressStorageProps,
  )

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

  const getAddressAsyncStorage = async () => {
    try {
      const addressStorage = await getAddressStorage()
      setAddress(addressStorage)
    } catch (error) {
      console.log('erro ao buscar endereço no storage')
    }
  }

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', () => {
      return true
    })
  }, [])
  useFocusEffect(
    useCallback(() => {
      getAddressAsyncStorage()
    }, []),
  )

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <S.Container showsVerticalScrollIndicator={false}>
        <S.Header>
          <S.HeaderTopInfos>
            <S.ContentLocal>
              <MapPin color={theme.colors.purple} size={20} weight="fill" />
              {address.city && (
                <S.TextLocal>{`${address.city}, ${address.state}`}</S.TextLocal>
              )}
            </S.ContentLocal>
            <ButtonCart />
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
        <Animated.View entering={FadeInDown.delay(300)}>
          <CatalogCoffee />
        </Animated.View>
        {/* <ToastMessage /> */}
      </S.Container>
    </TouchableWithoutFeedback>
  )
}
