import { ZipCodeMask } from './zipCodeMask'

describe('Utils: zipCodeMask', () => {
  it('should return the zip code formatted', () => {
    const zipCodeFormatted = ZipCodeMask('56750000')

    expect(zipCodeFormatted).toBe('56750-000')
  })
})
