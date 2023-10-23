export const ZipCodeMask = (zipCode: string) => {
  zipCode = zipCode.replace(/\D/g, '')
  if (zipCode.length >= 5) {
    zipCode = zipCode.replace(/^(\d{5})(\d{0,3})$/, '$1-$2')
  }

  return zipCode
}
