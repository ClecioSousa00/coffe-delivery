import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack'

import { Home } from '../screens/Home'
import { Splash } from '../screens/Splash'
import { Product } from '../screens/Product'

type StackNavigationProps = {
  home: undefined
  splash: undefined
  product: undefined
}
export type StackRoutesProps = NativeStackNavigationProp<StackNavigationProps>
const { Navigator, Screen } = createNativeStackNavigator<StackNavigationProps>()

export const StackNavigation = () => {
  return (
    <Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="product"
    >
      <Screen name="splash" component={Splash} />
      <Screen
        name="home"
        component={Home}
        options={{ gestureEnabled: false }}
      />
      <Screen name="product" component={Product} />
    </Navigator>
  )
}
