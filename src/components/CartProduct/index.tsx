import { Trash } from 'phosphor-react-native'
import { ButtonCounter } from '../ButtonCounter'
import * as S from './styles'

import img from '@/assets/Image-1.png'
import { useTheme } from 'styled-components/native'
import { ButtonIcon } from '../ButtonIcon'

export const CartProduct = () => {
  const theme = useTheme()

  return (
    <S.Container>
      <S.ImageCoffee source={img} />
      <S.Infos>
        <S.ContentHeader>
          <S.Title>Irlandês</S.Title>
          <S.Price>R$ 9,90</S.Price>
        </S.ContentHeader>
        <S.Size>227ml</S.Size>
        <S.ContentFooter>
          <ButtonCounter
            quantity={1}
            handleDecrement={() => console.log('oi')}
            handleIncrement={() => console.log('oi')}
          />
          <ButtonIcon isSelected>
            <Trash color={theme.colors.purple} size={20} />
          </ButtonIcon>
        </S.ContentFooter>
      </S.Infos>
    </S.Container>
  )
}
