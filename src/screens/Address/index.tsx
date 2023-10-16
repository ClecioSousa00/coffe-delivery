import * as S from './styles'

import React from 'react'
import {
  Keyboard,
  StatusBar,
  TouchableWithoutFeedback,
  View,
} from 'react-native'

import { HeaderScreen } from '@/components/HeaderScreen'
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPin,
  Money,
} from 'phosphor-react-native'

import { Input } from '@/components/Form/Input'
import { ButtonPayment } from '@/components/ButtonPayment'
import { Button } from '@/components/Button'

import { useForm } from 'react-hook-form'

import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { useTheme } from 'styled-components/native'

const userAddressSchema = z.object({
  zipCode: z
    .string({ required_error: 'CEP não informado' })
    .min(9, 'Informe um CEP válido'),
  street: z.string({ required_error: 'Informe uma rua' }),
  number: z.string({ required_error: 'Informe um número' }),
  district: z.string({ required_error: 'Informe o seu bairro' }),
  state: z.string({ required_error: 'Informe um estado' }),
  city: z.string({ required_error: 'Informe uma cidade' }),
})

type FormProps = z.infer<typeof userAddressSchema>

export const Address = () => {
  const theme = useTheme()
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormProps>({
    resolver: zodResolver(userAddressSchema),
  })

  const handleSubmitForm = (data: FormProps) => {
    console.log(data)
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={{ flex: 1 }}>
        <StatusBar
          translucent
          barStyle="dark-content"
          backgroundColor="transparent"
        />
        <S.Container>
          <HeaderScreen title="Endereço de Entrega" />
          <S.ContainerTitle>
            <MapPin color={theme.colors.yellow} size={20} />
            <S.ContentText>
              <S.Title>Entrega</S.Title>
              <S.Subtitle>
                Informe o endereço onde deseja receber seu pedido
              </S.Subtitle>
            </S.ContentText>
          </S.ContainerTitle>

          <S.Form>
            <Input
              control={control}
              name="zipCode"
              size="medium"
              placeholder="Cep"
              error={errors.zipCode && errors.zipCode?.message}
            />
            <Input
              control={control}
              name="street"
              size="large"
              placeholder="Rua"
              error={errors.street && errors.street?.message}
            />
            <S.ContainerInput>
              <Input
                control={control}
                name="number"
                size="small"
                placeholder="Número"
                error={errors.number && errors.number?.message}
              />
              <Input
                control={control}
                name="district"
                size="medium"
                placeholder="Bairro"
                error={errors.district && errors.district?.message}
              />
            </S.ContainerInput>
            <S.ContainerInput>
              <Input
                control={control}
                name="state"
                size="small"
                placeholder="UF"
                error={errors.state && errors.state?.message}
              />
              <Input
                control={control}
                name="city"
                size="medium"
                placeholder="Cidade"
                error={errors.city && errors.city?.message}
              />
            </S.ContainerInput>
          </S.Form>

          <S.ContainerTitle>
            <CurrencyDollar color={theme.colors.yellow} size={20} />
            <S.ContentText>
              <S.Title>Pagamento</S.Title>
              <S.Subtitle>
                O pagamento é feito na entrega. Escolha a forma de pagamento.
              </S.Subtitle>
            </S.ContentText>
          </S.ContainerTitle>

          <S.ContainerButton>
            <ButtonPayment text="cartão de crédito">
              <CreditCard color={theme.colors.purple} size={16} />
            </ButtonPayment>
            <ButtonPayment text="cartão de débito">
              <Bank color={theme.colors.purple} size={16} />
            </ButtonPayment>
            <ButtonPayment text="dinheiro">
              <Money color={theme.colors.purple} size={16} />
            </ButtonPayment>
          </S.ContainerButton>
        </S.Container>
        <S.Footer
          style={{
            elevation: 20,
            shadowColor: '#000',
            shadowOffset: {
              height: 20,
              width: 0,
            },
            shadowOpacity: 0.1,
          }}
        >
          <Button
            onPress={handleSubmit(handleSubmitForm)}
            text="Confirmar Entrega"
            color={theme.colors.yellow_dark}
          />
        </S.Footer>
      </View>
    </TouchableWithoutFeedback>
  )
}
