import styled from 'styled-components/native'

export const Container = styled.View`
  width: 100%;
  height: 52px;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  padding: 0px 12px;
  background-color: ${({ theme }) => theme.colors.gray_200};
  border-radius: 4px;
`

export const Input = styled.TextInput`
  flex: 1;
  color: ${({ theme }) => theme.colors.white};
`
