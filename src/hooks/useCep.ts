import { userAddressSchema } from '@/screens/Address/schema'
import { AddressProps, FormProps } from '@/screens/Address/types'
import { ZipCodeMask } from '@/utils/masks/zipCodeMask'
import { zodResolver } from '@hookform/resolvers/zod'
import axios from 'axios'
import { useCallback, useEffect } from 'react'
import { useForm } from 'react-hook-form'

export const useCep = () => {
  const {
    control,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<FormProps>({
    resolver: zodResolver(userAddressSchema),
    defaultValues: {
      city: '',
      district: '',
      number: '',
      state: '',
      street: '',
      zipCode: '',
    },
  })
  const zipCode = watch('zipCode')

  const handleSetDataForm = useCallback(
    (data: AddressProps) => {
      setValue('street', data.logradouro)
      setValue('city', data.localidade)
      setValue('district', data.bairro)
      setValue('state', data.uf)
    },
    [setValue],
  )

  const handleFetchAddress = useCallback(
    async (zipCode: string) => {
      console.log('zipcode', zipCode)

      const { data } = await axios.get(
        `https://viacep.com.br/ws/${zipCode}/json/`,
      )
      handleSetDataForm(data)
    },
    [handleSetDataForm],
  )

  const handleSubmitForm = (data: FormProps) => {
    console.log(data)
  }

  useEffect(() => {
    setValue('zipCode', ZipCodeMask(zipCode))
    if (zipCode.length !== 9) return
    handleFetchAddress(zipCode)
  }, [handleFetchAddress, zipCode, setValue])
  return {
    errors,
    control,
    handleSubmit,
    handleSubmitForm,
  }
}
