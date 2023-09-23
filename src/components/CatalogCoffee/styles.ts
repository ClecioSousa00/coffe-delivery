import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  padding: 0px 32px;
  margin-top: 48px;
`

export const TitleText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.balooBold};
  font-size: 16px;
  color: ${({ theme }) => theme.colors.gray_300};
  text-transform: capitalize;
`
export const ContainerButtonCategory = styled.View`
  flex-direction: row;
  gap: 12px;
  margin-top: 12px;
`

export const CategoryText = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.balooBold};
    font-size: ${theme.title_size.xs}px;
    color: ${theme.colors.gray_400};
  `}
  text-transform: capitalize;
  margin: 48px 0px 32px;
`
