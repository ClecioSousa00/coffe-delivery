import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.gray_100};
  padding-top: 56px;
`

export const Content = styled.View`
  flex: 1;
  padding: 0px 32px;
`

export const ContentHeader = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const TagContent = styled.View`
  border-radius: 100px;
  padding: 6px 12px;
  align-self: flex-start;
  background-color: ${({ theme }) => theme.colors.gray_200};
  margin-bottom: 12px;
  margin-top: 38px;
`
export const TagText = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.robotoBold};
    font-size: ${theme.text_size.tag}px;
    color: ${theme.colors.white};
  `}
  text-transform: uppercase;
`
export const NameCoffee = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.balooBold};
    font-size: ${theme.title_size.lg}px;
    color: ${theme.colors.white};
  `}
`

export const ContentPrice = styled.View`
  flex-direction: row;
  align-items: baseline;
  margin-bottom: 10px;
`
export const TextPrice = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.balooBold};
    font-size: ${theme.title_size.xs}px;
    color: ${theme.colors.yellow_dark};
  `}
`
export const ValuePrice = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.balooBold};
    font-size: ${theme.title_size.xl}px;
    color: ${theme.colors.yellow_dark};
  `}
`
export const Description = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.robotoRegular};
    font-size: ${theme.text_size.md}px;
    color: ${theme.colors.gray_500};
    margin-top: 20px;
    width: 280px;
  `}
`

export const ImageCoffee = styled.Image`
  bottom: 10px;
  z-index: 1;
`

export const Footer = styled.View`
  background-color: ${({ theme }) => theme.colors.gray_900};
  height: 222px;
  padding: 42px 32px 0px;
`
export const FooterText = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.robotoRegular};
    font-size: ${theme.text_size.sm}px;
    color: ${theme.colors.gray_400};
  `}
`
export const ContainerOptions = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 8px;
`
export const ContainerInput = styled.View`
  background-color: ${({ theme }) => theme.colors.gray_700};
  border-radius: 6px;
  flex-direction: row;
  align-items: center;
  gap: 4px;
  padding: 8px;
  margin-top: 20px;
`
