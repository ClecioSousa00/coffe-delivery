import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack'

import { Home } from '../screens/Home'
import { Splash } from '../screens/Splash'

const { Navigator, Screen } = createNativeStackNavigator()

type StackNavigationProps = {
  home: undefined
  splash: undefined
}
export type StackType = NativeStackNavigationProp<StackNavigationProps>

export const StackNavigation = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="splash" component={Splash} />
      <Screen
        name="home"
        component={Home}
        options={{ gestureEnabled: false }}
      />
    </Navigator>
  )
}
