import * as S from './styles'

import { View } from 'react-native'
import { useEffect, useState } from 'react'

import { CardCoffee } from '@/components/CardCoffee'

import { DataListCoffeeProps } from '@/types/dataListCoffeType'
import { dataListCoffee } from '@/dataListCoffee'

type Props = {
  data: DataListCoffeeProps[]
}

export const ListCardHighLight = ({ data }: Props) => {
  const [dataList, setDataList] = useState(dataListCoffee)

  useEffect(() => {
    setDataList(data)
  }, [data])

  // useEffect(() => {
  //   const shuffleData = dataListCoffee.sort((a, b) => Math.random() - 0.5)
  //   setDataList(shuffleData)
  // }, [])

  return (
    <S.Container>
      <S.ListCard
        data={dataList}
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
