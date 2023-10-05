import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.gray_900};
  padding: 72px 0px 0px;
`

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 28px;
`

export const ButtonBack = styled.TouchableOpacity`
  position: absolute;
  left: 32px;
`

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.balooBold};
    font-size: ${theme.title_size.sm}px;
    color: ${theme.colors.gray_200};
  `}
`

export const Footer = styled.View`
  padding: 28px 32px;
  gap: 20px;
  width: 100%;
  position: absolute;
  bottom: 0;
  background-color: ${({ theme }) => theme.colors.white};
`
export const ContentHeader = styled.View`
  flex-direction: row;
  align-items: baseline;
  justify-content: space-between;
`

export const TitleFooter = styled.Text`
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
