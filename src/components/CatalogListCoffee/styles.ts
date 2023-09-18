import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  gap: 32px;
`

export const CategoryText = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.balooBold};
    font-size: ${theme.title_size.xs}px;
    color: ${theme.colors.gray_400};
  `}
  text-transform: capitalize;
  margin-top: 48px;
`
