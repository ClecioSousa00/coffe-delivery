import { Minus, Plus } from 'phosphor-react-native'
import * as S from './styles'
import { useTheme } from 'styled-components/native'

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
    <S.ContentInput>
      <S.ButtonInput onPress={handleDecrement}>
        <Minus color={theme.colors.purple} size={20} weight="bold" />
      </S.ButtonInput>
      <S.InputNumber>{quantity}</S.InputNumber>
      <S.ButtonInput onPress={handleIncrement}>
        <Plus color={theme.colors.purple} size={20} weight="bold" />
      </S.ButtonInput>
    </S.ContentInput>
  )
}
