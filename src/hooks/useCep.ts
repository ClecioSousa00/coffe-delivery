import { StackRoutesProps } from '@/routes/stack.routes'
import { userAddressSchema } from '@/screens/Address/schema'
import { AddressProps, FormProps } from '@/screens/Address/types'
import { saveAddressStorage } from '@/storage/addressStorage/saveAddressStorage'
import { ZipCodeMask } from '@/utils/masks/zipCodeMask'
import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigation } from '@react-navigation/native'
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
  const navigation = useNavigation<StackRoutesProps>()
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
      try {
        const { data } = await axios.get(
          `https://viacep.com.br/ws/${zipCode}/json/`,
        )
        handleSetDataForm(data)
      } catch (error) {
        console.log('erro ao buscar o endereço')
      }
    },
    [handleSetDataForm],
  )

  const handleSubmitForm = (data: FormProps) => {
    const { city, state } = data
    saveAddressStorage({ city, state })
    navigation.navigate('purchaseCompleted')
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
