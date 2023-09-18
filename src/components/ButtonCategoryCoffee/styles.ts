import styled from 'styled-components/native'

export const ButtonCategory = styled.TouchableOpacity`
  border-width: 1px;
  border-radius: 100px;
  border-color: ${({ theme }) => theme.colors.purple};
  padding: 6px 12px;
`

export const TextButton = styled.Text`
  font-family: ${({ theme }) => theme.fonts.robotoBold};
  font-size: ${({ theme }) => theme.text_size.tag}px;
  color: ${({ theme }) => theme.colors.purple_dark};
  text-transform: uppercase;
`
