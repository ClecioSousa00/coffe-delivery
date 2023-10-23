import { NavigationContainer } from '@react-navigation/native'
import { StackNavigation } from './stack.routes'
import Toast from 'react-native-toast-message'
import { ToastMessage } from '@/components/ToastMessage'
import { ProductStorage } from '@/types/dataListCoffeType'

export type ToastProps = {
  props: {
    product: ProductStorage
  }
}

const toastConfig = {
  productToast: ({ props }: ToastProps) => <ToastMessage props={props} />,
}
export const Routes = () => {
  return (
    <NavigationContainer>
      <StackNavigation />
      <Toast position="bottom" bottomOffset={5} config={toastConfig} />
    </NavigationContainer>
  )
}
