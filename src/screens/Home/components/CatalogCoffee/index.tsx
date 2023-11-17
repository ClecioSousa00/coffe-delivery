import * as S from './styles'
import { SectionList, View } from 'react-native'

import { TagCatalogCoffee } from '../../../../screens/Home/components/TagCatalogCoffee'
import { CardCatalogCoffee } from '../../../../components/CardCatalogCoffee'

import { UseCatalogCoffee } from '../../../../hooks/useCatalogCoffee'

export const CatalogCoffee = () => {
  const {
    dataCatalogCoffee,
    singularToPlural,
    typesCoffee,
    typesCatalogCoffee,
    handleSelectedCoffeeCatalog,
  } = UseCatalogCoffee()

  return (
    <S.Container>
      <S.TitleText>Nossos cafés</S.TitleText>
      <S.ContainerButtonCategory testID="categories">
        {typesCatalogCoffee.map((item) => (
          <TagCatalogCoffee
            key={item}
            text={item}
            isActive={typesCoffee.includes(item)}
            onPress={() => handleSelectedCoffeeCatalog(item)}
            testID="tag-catalog"
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
