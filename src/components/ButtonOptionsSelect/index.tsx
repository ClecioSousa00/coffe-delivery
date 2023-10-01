import * as S from './styles'
import { PressableProps } from 'react-native'

type Props = {
  isSelected: boolean
  size: number
} & PressableProps

export const ButtonOptionsSelect = ({
  isSelected = false,
  size,
  ...rest
}: Props) => {
  return (
    <S.ButtonOption isSelected={isSelected} {...rest}>
      <S.ButtonText isSelected={isSelected}>{size}ml</S.ButtonText>
    </S.ButtonOption>
  )
}
