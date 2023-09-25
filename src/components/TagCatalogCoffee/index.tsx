import * as S from './styles'

import { TouchableOpacityProps } from 'react-native'

export type ButtonProps = {
  text: string
  isActive: boolean
} & TouchableOpacityProps

export const TagCatalogCoffee = ({
  text,
  isActive = false,
  ...rest
}: ButtonProps) => {
  return (
    <S.ButtonCategory activeOpacity={0.7} isActive={isActive} {...rest}>
      <S.TextButton isActive={isActive}>{text}</S.TextButton>
    </S.ButtonCategory>
  )
}
