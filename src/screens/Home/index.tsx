import * as S from './styles'

import { BackHandler, Keyboard, TouchableWithoutFeedback } from 'react-native'
import { useEffect } from 'react'

import { InputSearch } from '../../components/InputSearch'

import { MapPin, ShoppingCart } from 'phosphor-react-native'
import theme from '../../styles/theme'
import grainCoffeeImage from '../../assets/coffe.png'
import { CardCoffee } from '../../components/CardCoffee'
import { ListCardCoffee } from '../../components/ListCardCoffee'

export const Home = () => {
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
          <InputSearch />
          <S.ImageGrainCoffee source={grainCoffeeImage} />
        </S.Header>
        <ListCardCoffee />
      </S.Container>
    </TouchableWithoutFeedback>
  )
}
