import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack'

import { Home } from '@/screens/Home'
import { Splash } from '@/screens/Splash'
import { Product } from '@/screens/Product'
import { Cart } from '@/screens/Cart'
import { Address } from '@/screens/Address'

type StackNavigationProps = {
  home: undefined
  splash: undefined
  product: { id: number }
  cart: undefined
  address: undefined
}
export type StackRoutesProps = NativeStackNavigationProp<StackNavigationProps>
const { Navigator, Screen } = createNativeStackNavigator<StackNavigationProps>()

export const StackNavigation = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="splash" component={Splash} />
      <Screen
        name="home"
        component={Home}
        options={{ gestureEnabled: false }}
      />
      <Screen name="product" component={Product} />
      <Screen name="cart" component={Cart} />
      <Screen name="address" component={Address} />
    </Navigator>
  )
}
