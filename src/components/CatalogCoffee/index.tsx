import * as S from './styles'
import { useEffect, useState } from 'react'
import { SectionList, View } from 'react-native'

import { ButtonCategoryCoffee } from '../ButtonCategoryCoffee'
import { CardCatalogCoffee } from '../CardCatalogCoffee'

import { groupDataByType } from '../../utils/groupDatabyType'

import { CatalogDataList } from '../../types/dataListCoffeType'

export const CatalogCoffee = () => {
  const [dataCoffee, setDataCoffee] = useState<CatalogDataList[] | []>([])
  const [typeCoffee, setTypeCoffee] = useState<string | null>(null)

  const singularToPlural = {
    tradicional: 'tradicionais',
    doce: 'doces',
    especial: 'especiais',
  }

  useEffect(() => {
    const data = groupDataByType()
    setDataCoffee(data)
  }, [])

  return (
    <S.Container>
      <S.TitleText>Nossos cafés</S.TitleText>
      <S.ContainerButtonCategory>
        <ButtonCategoryCoffee text="tradicionais" />
        <ButtonCategoryCoffee text="doces" />
        <ButtonCategoryCoffee text="especiais" />
      </S.ContainerButtonCategory>

      <SectionList
        sections={dataCoffee}
        keyExtractor={(item) => String(item.id)}
        showsVerticalScrollIndicator={false}
        scrollEnabled={false}
        contentContainerStyle={{ paddingVertical: 32 }}
        renderItem={({ item }) => <CardCatalogCoffee data={item} />}
        renderSectionHeader={({ section: { title } }) => (
          <S.CategoryText>{singularToPlural[title]}</S.CategoryText>
        )}
        ItemSeparatorComponent={() => (
          <View style={{ marginBottom: 32 }}></View>
        )}
      />
    </S.Container>
  )
}
