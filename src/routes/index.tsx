import { NavigationContainer } from '@react-navigation/native'
import { StackNavigation } from './stack.routes'

export const Routes = () => {
  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  )
}
