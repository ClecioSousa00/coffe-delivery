import * as S from './styles'
import { useEffect, useState } from 'react'
import { SectionList, View } from 'react-native'

import { TagCatalogCoffee } from '@/screens/Home/components/TagCatalogCoffee'
import { CardCatalogCoffee } from '@/components/CardCatalogCoffee'

import { groupDataByType } from '@/utils/groupDatabyType'

import { CatalogDataList, DataListCoffeeProps } from '@/types/dataListCoffeType'

import { dataListCoffee } from '@/DataProducts/dataListCoffee'

const singularToPlural = {
  tradicional: 'tradicionais',
  doce: 'doces',
  especial: 'especiais',
}

const typesCatalogCoffee = ['tradicionais', 'doces', 'especiais']

export const CatalogCoffee = () => {
  const [dataCoffee, setDataCoffee] =
    useState<DataListCoffeeProps[]>(dataListCoffee)
  const [dataCatalogCoffee, setDataCatalogCoffee] = useState<CatalogDataList[]>(
    [],
  )

  const [typesCoffee, setTypesCoffee] = useState(typesCatalogCoffee)

  const handleSelectedCoffeeCatalog = (type: string) => {
    const typeAlreadySelected = typesCoffee.includes(type)

    if (typeAlreadySelected) {
      const filterTypeCoffee = typesCatalogCoffee.filter(
        (item) => item !== type,
      )
      setTypesCoffee(filterTypeCoffee)
      filterCatalogCoffee(type)
    } else {
      setTypesCoffee(typesCatalogCoffee)
      setDataCoffee(dataListCoffee)
    }
  }

  const filterCatalogCoffee = (type: string) => {
    for (const key in singularToPlural) {
      if (singularToPlural[key] === type) {
        const catalogTypeFiltered = dataListCoffee.filter(
          (item) => item.type === key,
        )
        setDataCoffee(catalogTypeFiltered)
      }
    }
  }

  useEffect(() => {
    const data = groupDataByType(dataCoffee)
    setDataCatalogCoffee(data)
  }, [dataCoffee])

  return (
    <S.Container>
      <S.TitleText>Nossos cafés</S.TitleText>
      <S.ContainerButtonCategory>
        {typesCatalogCoffee.map((item) => (
          <TagCatalogCoffee
            key={item}
            text={item}
            isActive={typesCoffee.includes(item)}
            onPress={() => handleSelectedCoffeeCatalog(item)}
          />
        ))}
      </S.ContainerButtonCategory>

      <SectionList
        sections={dataCatalogCoffee}
        keyExtractor={(item) => String(item.id)}
        contentContainerStyle={{ paddingBottom: 32 }}
        renderItem={({ item, index }) => (
          <CardCatalogCoffee index={index} data={item} />
        )}
        renderSectionHeader={({ section }) => (
          <S.CategoryText>{singularToPlural[section.title]}</S.CategoryText>
        )}
        ItemSeparatorComponent={() => (
          <View style={{ marginBottom: 32 }}></View>
        )}
        showsVerticalScrollIndicator={false}
        scrollEnabled={false}
      />
    </S.Container>
  )
}
