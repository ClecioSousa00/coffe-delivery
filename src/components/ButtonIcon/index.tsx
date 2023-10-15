import { ReactNode } from 'react'
import * as S from './styles'
import { TouchableOpacityProps } from 'react-native'

export type ButtonIconProps = {
  children: ReactNode
  isSelected: boolean
} & TouchableOpacityProps

export const ButtonIcon = ({
  children,
  isSelected,
  ...rest
}: ButtonIconProps) => {
  return (
    <S.Button {...rest} isSelected={isSelected}>
      {children}
    </S.Button>
  )
}
