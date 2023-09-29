import * as S from './styles'
import { MagnifyingGlass } from 'phosphor-react-native'
import React from 'react'

import { TextInputProps } from 'react-native'

import { useTheme } from 'styled-components/native'

export type InputSearchProps = {
  isFocus: boolean
} & TextInputProps

export const InputSearch = ({
  isFocus,

  ...rest
}: InputSearchProps) => {
  const theme = useTheme()
  const colorIcon = isFocus ? theme.colors.yellow : theme.colors.gray_400

  return (
    <S.Container isFocus={isFocus}>
      <MagnifyingGlass color={colorIcon} size={18} />
      <S.Input
        {...rest}
        placeholder="Pesquisar"
        placeholderTextColor={theme.colors.gray_400}
      />
    </S.Container>
  )
}
