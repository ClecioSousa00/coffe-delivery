import * as S from './styles'

import { View } from 'react-native'

import { dataListCoffee } from '@/dataListCoffee'
import { CardCoffee } from '@/components/CardCoffee'

export const ListCardHighLight = () => {
  return (
    <S.Container>
      <S.ListCard
        data={dataListCoffee}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <CardCoffee data={item} />}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingTop: 20,
          paddingVertical: 10,
          marginLeft: 32,
          paddingRight: 32,
        }}
        ItemSeparatorComponent={() => <View style={{ width: 32 }} />}
      />
    </S.Container>
  )
}
