import { z } from 'zod'
import { userAddressSchema } from './schema'

export type FormProps = z.infer<typeof userAddressSchema>

export type AddressProps = {
  logradouro: string
  bairro: string
  uf: string
  localidade: string
}
