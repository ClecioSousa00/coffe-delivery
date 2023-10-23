import * as S from './styles'

import React from 'react'
import { TextInputProps, View } from 'react-native'

import { Controller, UseControllerProps, FieldValues } from 'react-hook-form'

export type InputProps = {
  size?: 'small' | 'medium' | 'large'
  error?: string
  name: string
} & TextInputProps

export const Input = <FormType extends FieldValues>({
  size = 'large',
  error = '',
  name,
  control,
  ...rest
}: UseControllerProps<FormType> & InputProps) => {
  return (
    <View>
      <Controller
        control={control}
        name={name}
        render={({ field: { value, onChange } }) => (
          <S.Input
            size={size}
            value={value}
            onChangeText={onChange}
            error={error}
            {...rest}
          />
        )}
      />
      {error && <S.MessageError>{error}</S.MessageError>}
    </View>
  )
}
