import { dataListCoffee } from '@/DataProducts/dataListCoffee'
import { CatalogDataList, DataListCoffeeProps } from '@/types/dataListCoffeType'
import { groupDataByType } from '@/utils/groupDatabyType'
import { useEffect, useState } from 'react'

const singularToPlural = {
  tradicional: 'tradicionais',
  doce: 'doces',
  especial: 'especiais',
}

const typesCatalogCoffee = ['tradicionais', 'doces', 'especiais']

export const UseCatalogCoffee = () => {
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

  return {
    typesCatalogCoffee,
    typesCoffee,
    handleSelectedCoffeeCatalog,
    dataCatalogCoffee,
    singularToPlural,
  }
}
