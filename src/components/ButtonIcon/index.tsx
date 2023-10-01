import { ReactNode } from 'react'
import * as S from './styles'

export type ButtonIconProps = {
  children: ReactNode
  isSelected: boolean
}

export const ButtonIcon = ({ children, isSelected }: ButtonIconProps) => {
  return <S.Button isSelected={isSelected}>{children}</S.Button>
}
