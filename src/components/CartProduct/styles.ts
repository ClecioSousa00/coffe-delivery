import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  padding: 16px 32px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.gray_600};
  flex-direction: row;
  align-items: center;
  gap: 20px;
`
export const ImageCoffee = styled.Image`
  width: 64px;
  height: 64px;
`

export const Infos = styled.View`
  flex: 1;
`

export const ContentHeader = styled.View`
  flex-direction: row;
  align-items: baseline;
  justify-content: space-between;
`

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.robotoBold};
    font-size: ${theme.title_size.sm}px;
    color: ${theme.colors.gray_100};
  `}
`
export const Price = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.balooBold};
    font-size: ${theme.title_size.sm}px;
    color: ${theme.colors.yellow_dark};
  `}
`
export const Size = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.robotoRegular};
    font-size: ${theme.text_size.sm}px;
    color: ${theme.colors.gray_400};
  `}
`
export const ContentFooter = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 8px;
  margin-top: 8px;
`
