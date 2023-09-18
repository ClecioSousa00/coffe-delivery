import * as S from './styles'

type ButtonProps = {
  text: string
}

export const ButtonCategoryCoffee = ({ text }: ButtonProps) => {
  return (
    <S.ButtonCategory activeOpacity={0.7}>
      <S.TextButton>{text}</S.TextButton>
    </S.ButtonCategory>
  )
}
