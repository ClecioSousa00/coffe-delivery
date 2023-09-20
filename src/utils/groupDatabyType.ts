import {
  DataListCoffeeProps,
  CatalogDataList,
} from '../types/dataListCoffeType'

import { dataListCoffee } from '../dataListCoffee'

export const groupDataByType = () => {
  const groupedData: { [key: string]: DataListCoffeeProps[] } = {}

  dataListCoffee.forEach((item) => {
    if (!groupedData[item.type]) {
      groupedData[item.type] = []
    }
    groupedData[item.type].push(item)
  })

  const data: CatalogDataList[] = Object.entries(groupedData).map(
    ([key, value]) => ({
      title: key,
      data: value,
    }),
  )

  return data
}
