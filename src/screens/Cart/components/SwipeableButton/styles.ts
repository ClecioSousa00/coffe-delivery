import styled from 'styled-components/native'

export const Button = styled.Pressable`
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 118px;
  background-color: ${({ theme }) => theme.colors.red_light};
`
