import {
  DataListCoffeeProps,
  CatalogDataList,
} from '../types/dataListCoffeType'

export const groupDataByType = (data: DataListCoffeeProps[]) => {
  const groupedData: { [key: string]: DataListCoffeeProps[] } = {}

  data.forEach((item) => {
    if (!groupedData[item.type]) {
      groupedData[item.type] = []
    }
    groupedData[item.type].push(item)
  })

  const newData: CatalogDataList[] = Object.entries(groupedData).map(
    ([key, value]) => ({
      title: key,
      data: value,
    }),
  )

  return newData
}
