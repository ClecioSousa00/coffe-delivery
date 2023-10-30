import { ToastProps } from '@/routes'
import { mocks } from './dataMock'

export const productsMock: ToastProps = {
  props: {
    product: {
      data: mocks.product,
      size: 227,
      quantity: 1,
    },
  },
}
