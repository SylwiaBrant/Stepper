import React, { useState, useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Drawer from './drawer'
import { AuthStackScreen } from './stacks'
import { useSelector, connect } from 'react-redux'

const RootStack = createStackNavigator();

const RootStackScreen = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    console.log(props.isLoggedIn)
    setIsLoggedIn(props.isLoggedIn)
  },[props.isLoggedIn])

return (<NavigationContainer>
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
  </NavigationContainer>)
}

const mapStateToProps = (state) => {
  console.log(state)
  return{
    isLoggedIn: state.auth.isLoggedIn
  }
}

export default connect(mapStateToProps, null)(RootStackScreen)
