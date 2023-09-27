import * as S from './styles'
import { PressableProps } from 'react-native'

type Props = {
  isSelected: boolean
  text: string
} & PressableProps

export const ButtonOptionsSelect = ({
  isSelected = false,
  text,
  ...rest
}: Props) => {
  return (
    <S.ButtonOption isSelected={isSelected} {...rest}>
      <S.ButtonText isSelected={isSelected}>{text}</S.ButtonText>
    </S.ButtonOption>
  )
}
