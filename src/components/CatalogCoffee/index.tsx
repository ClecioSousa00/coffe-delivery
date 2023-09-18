import * as S from './styles'
import { ButtonCategoryCoffee } from '../ButtonCategoryCoffee'
import { CatalogListCoffee } from '../CatalogListCoffee'
import { useEffect, useState } from 'react'
import { SectionList } from 'react-native'

import { dataListCoffee } from '../../dataListCoffee'
import { DataListCoffeeProps } from '../../types/dataListCoffeType'

type SectionListProps = {
  title: string
  data: DataListCoffeeProps[]
}

export const CatalogCoffee = () => {
  const [dataCoffee, setDataCoffee] = useState<SectionListProps | []>([])
  const [typeCoffee, setTypeCoffee] = useState<string | null>(null)

  const title = {
    tradicional: 'tradicionais',
    doce: 'doces',
    especial: 'especiais',
  }

  // useEffect(() => {
  //   const newDataCoffee = Object.entries(dataListCoffee).forEach((key, value) =>
  //     console.log(key, value),
  //   )
  // }, [])

  return (
    <S.Container>
      <S.TitleText>Nossos cafés</S.TitleText>
      <S.ContainerButtonCategory>
        <ButtonCategoryCoffee text="tradicionais" />
        <ButtonCategoryCoffee text="doces" />
        <ButtonCategoryCoffee text="especiais" />
      </S.ContainerButtonCategory>

      <CatalogListCoffee
        title="tradicionais"
        type="tradicional"
        data={dataListCoffee}
      />
      <CatalogListCoffee title="doces" type="doce" data={dataListCoffee} />
      <CatalogListCoffee
        title="especiais"
        type="especial"
        data={dataListCoffee}
      />
      {/* <CatalogListCoffee title="doces" data={listCoffeeSweet} />
      <CatalogListCoffee title="especiais" data={listCoffeeSpecial} /> */}
    </S.Container>
  )
}
