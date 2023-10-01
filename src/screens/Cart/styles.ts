import styled, { css } from 'styled-components/native'

export const Container = styled.ScrollView`
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
