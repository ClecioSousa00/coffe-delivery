import styled from 'styled-components/native'

export const Container = styled.ScrollView`
  flex: 1;
  flex-grow: 1;
  background-color: ${({ theme }) => theme.colors.gray_900};
`
export const Header = styled.View`
  background-color: ${({ theme }) => theme.colors.gray_100};
  height: 390px;
  padding: 56px 32px 44px;
`
export const HeaderTopInfos = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`
export const ContentLocal = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 8px;
`
export const TextLocal = styled.Text`
  font-family: ${({ theme }) => theme.fonts.robotoRegular};
  font-size: 14px;
  color: ${({ theme }) => theme.colors.gray_900};
`
export const HeaderSearchContent = styled.View``

export const TitleSearch = styled.Text`
  font-family: ${({ theme }) => theme.fonts.balooBold};
  font-size: 20px;
  color: ${({ theme }) => theme.colors.white};
  margin-top: 30px;
  margin-bottom: 15px;
`

export const ImageGrainCoffee = styled.Image`
  position: absolute;
  bottom: 70px;
  right: 5px;
  z-index: -1;
`
