import styled from 'styled-components/native'
import { FlatList, FlatListProps } from 'react-native'
import { DataListCoffeeProps } from '../../../../types/dataListCoffeType'

export const Container = styled.View`
  margin-top: -70px;
`

export const ListCard = styled(
  FlatList as new (
    props: FlatListProps<DataListCoffeeProps>,
  ) => FlatList<DataListCoffeeProps>,
)``
