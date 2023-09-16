import styled from 'styled-components/native'

export const Container = styled.View`
  width: 208px;
  height: 262px;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.gray_700};
  border-top-left-radius: 6px;
  border-top-right-radius: 36px;
  border-bottom-right-radius: 6px;
  border-bottom-left-radius: 6px;
  padding: 0px 16px;
`

export const ImageCoffee = styled.Image`
  margin-top: -20px;
`

export const TypeContent = styled.View`
  background-color: ${({ theme }) => theme.colors.purple_light};
  padding: 4px 8px;
  border-radius: 30px;
  margin: 8px 0px 14px;
`

export const TextType = styled.Text`
  font-family: ${({ theme }) => theme.fonts.robotoBold};
  font-size: 10px;
  color: ${({ theme }) => theme.colors.purple_dark};
  text-transform: uppercase;
`
export const TextName = styled.Text`
  font-family: ${({ theme }) => theme.fonts.balooBold};
  font-size: 20px;
  color: ${({ theme }) => theme.colors.gray_200};
`

export const TextDescription = styled.Text`
  font-family: ${({ theme }) => theme.fonts.robotoRegular};
  font-size: 12px;
  color: ${({ theme }) => theme.colors.gray_400};
  text-align: center;
`
export const ContentPrice = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 2px;
  margin-top: 18px;
`
export const TextPrice = styled.Text`
  font-family: ${({ theme }) => theme.fonts.robotoRegular};
  font-size: 14px;
  color: ${({ theme }) => theme.colors.yellow_dark};
`
export const NumberPrice = styled.Text`
  font-family: ${({ theme }) => theme.fonts.balooBold};
  font-size: 24px;
  color: ${({ theme }) => theme.colors.yellow_dark};
`
