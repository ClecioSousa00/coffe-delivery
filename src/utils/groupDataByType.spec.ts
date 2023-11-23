import { mocks } from '../mock/dataMock'
import { groupDataByType } from './groupDatabyType'

describe('Utils: groupDataByType', () => {
  it('should return the list products formatted ', () => {
    const productsFormatted = groupDataByType(mocks.listProducts)

    expect(productsFormatted[0].title).toBe(mocks.listProducts[0].type)
  })
})
