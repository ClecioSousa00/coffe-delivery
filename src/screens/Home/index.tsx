import { useEffect } from 'react'
import { BackHandler } from 'react-native'
import * as S from './styles'

export const Home = () => {
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', () => {
      return true
    })
  }, [])
  return <S.Container></S.Container>
}
