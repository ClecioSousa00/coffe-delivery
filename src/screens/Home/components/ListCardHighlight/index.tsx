import * as S from './styles'

import { View } from 'react-native'

import { DataListCoffeeProps } from '@/types/dataListCoffeType'
import { CardCoffee } from '../CardCoffee'

type Props = {
  data: DataListCoffeeProps[]
}

export const ListCardHighLight = ({ data }: Props) => {
  return (
    <S.Container>
      <S.ListCard
        testID="list-products"
        data={data}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item, index }) => (
          <CardCoffee index={index} data={item} />
        )}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingTop: 20,
          paddingVertical: 10,
          marginLeft: 32,
          paddingRight: 62,
        }}
        ItemSeparatorComponent={() => <View style={{ width: 32 }} />}
      />
    </S.Container>
  )
}
