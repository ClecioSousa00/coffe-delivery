import { z } from 'zod'

export const userAddressSchema = z.object({
  zipCode: z
    .string({ required_error: 'CEP não informado' })
    .min(9, 'Informe um CEP válido'),
  street: z.string().min(1, 'Informe uma rua'),
  number: z.string().min(1, 'Informe um número'),
  district: z.string().min(1, 'Informe o seu bairro'),
  state: z.string().min(1, 'Informe um estado'),
  city: z.string().min(1, 'Informe uma cidade'),
})
