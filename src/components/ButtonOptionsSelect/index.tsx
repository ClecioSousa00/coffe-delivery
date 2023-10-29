import * as S from './styles'
import { PressableProps } from 'react-native'

type Props = {
  isSelected?: boolean
  size: number
} & PressableProps

export const ButtonOptionsSelect = ({
  isSelected = false,
  size,
  ...rest
}: Props) => {
  return (
    <S.ButtonOption testID="button" isSelected={isSelected} {...rest}>
      <S.ButtonText testID="button-text" isSelected={isSelected}>
        {size}ml
      </S.ButtonText>
    </S.ButtonOption>
  )
}
