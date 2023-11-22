import * as S from './styles'
import { useTheme } from 'styled-components/native'

import { Minus, Plus } from 'phosphor-react-native'

import { ButtonIcon } from '../ButtonIcon'

type Props = {
  quantity: number
  handleIncrement: () => void
  handleDecrement: () => void
}

export const ButtonCounter = ({
  quantity,
  handleIncrement,
  handleDecrement,
}: Props) => {
  const theme = useTheme()

  return (
    <S.ContentInput testID="button-counter">
      <ButtonIcon
        testID="button-decrement"
        isSelected={false}
        onPress={handleDecrement}
      >
        <Minus color={theme.colors.purple} size={20} weight="bold" />
      </ButtonIcon>
      <S.InputNumber testID="button-quantity">{quantity}</S.InputNumber>
      <ButtonIcon
        testID="button-increment"
        isSelected={false}
        onPress={handleIncrement}
      >
        <Plus color={theme.colors.purple} size={20} weight="bold" />
      </ButtonIcon>
    </S.ContentInput>
  )
}
