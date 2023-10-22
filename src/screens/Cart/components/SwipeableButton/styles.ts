import styled from 'styled-components/native'

export const Button = styled.Pressable`
  justify-content: center;
  padding-left: 40px;
  width: 100%;
  height: 118px;
  background-color: ${({ theme }) => theme.colors.red_light};
`
