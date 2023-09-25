import * as S from './styles'

type Props = {
  isSelected?: boolean
  text: string
}

export const ButtonOptionsSelect = ({ isSelected = false, text }: Props) => {
  return (
    <S.ButtonOption isSelected={isSelected}>
      <S.ButtonText>{text}</S.ButtonText>
    </S.ButtonOption>
  )
}
