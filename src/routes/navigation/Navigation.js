import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Drawer from './drawer'
import { AuthStackScreen } from './stacks'
import { useSelector } from 'react-redux'

const RootStack = createStackNavigator();

const RootStackScreen = () => {
  const { isLoggedIn } = useSelector((state) => state.auth)
  console.log(isLoggedIn)
return <NavigationContainer>
  <RootStack.Navigator headerMode="none">
    {isLoggedIn ? (
      <RootStack.Screen
        name="App"
        component={Drawer}
        options={{
          animationEnabled: false,
        }}
      />
    ) : (
      <RootStack.Screen
        name="Auth"
        component={AuthStackScreen}
        options={{
          animationEnabled: false,
        }}
      />
    )}
  </RootStack.Navigator>
  </NavigationContainer>
}

export default RootStackScreen
