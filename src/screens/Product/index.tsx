import * as S from './styles'

import { useTheme } from 'styled-components/native'

import { ArrowLeft, ShoppingCart } from 'phosphor-react-native'

import coffee from '../../assets/Coffee.png'
import { ButtonOptionsSelect } from '../../ButtonOptionsSelect'

export const Product = () => {
  const theme = useTheme()
  const options = ['114ml', '140ml', '227ml']

  return (
    <S.Container>
      <S.Content>
        <S.ContentHeader>
          <ArrowLeft color={theme.colors.white} size={24} />
          <ShoppingCart color={theme.colors.yellow_dark} weight="fill" />
        </S.ContentHeader>

        <S.TagContent>
          <S.TagText>especial</S.TagText>
        </S.TagContent>
        <S.ContentHeader>
          <S.NameCoffee>Irlandês</S.NameCoffee>
          <S.ContentPrice>
            <S.TextPrice>R$</S.TextPrice>
            <S.ValuePrice>9,90</S.ValuePrice>
          </S.ContentPrice>
        </S.ContentHeader>
        <S.Description>
          Bebida a base de café, uísque irlandês, açúcar e Chantilly
        </S.Description>

        <S.ImageCoffee
          source={coffee}
          defaultSource={coffee}
          alt="Imagem de uma chicara de café"
        />
      </S.Content>
      <S.Footer>
        <S.FooterText>Selecione o tamanho:</S.FooterText>
        <S.ContainerOptions>
          {options.map((item) => (
            <ButtonOptionsSelect text={item} key={item} />
          ))}
        </S.ContainerOptions>
      </S.Footer>
    </S.Container>
  )
}
