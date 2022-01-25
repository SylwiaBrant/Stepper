import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { useSelector } from 'react-redux'
import Login from '../../../scenes/login'
import Registration from '../../../scenes/registration'
import Home from '../../../scenes/home'
import Profile from '../../../scenes/profile'
import Counter from '../../../scenes/counter'
import Details from '../../../scenes/details'
import HeaderLeft from './HeaderLeft'
import HeaderTitle from './HeaderTitle'

// ------------------------------------
// Constants
// ------------------------------------

const Stack = createStackNavigator()

// ------------------------------------
// Navigators
// ------------------------------------

const AppStackNavigator = () => {
  const { isLoggedIn } = useSelector((state) => state.auth)
  console.log('In AppStackNavigator')
  console.log(isLoggedIn)
  if (isLoggedIn) {
    console.log('Is not log in')
    console.log(isLoggedIn)
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={({ navigation }) => ({
            title: 'Login',
            headerShown: false,
            tabBarVisible: false,
            headerLeft: () => <HeaderLeft navigation={navigation} />,
            headerTitle: () => <HeaderTitle />,
          })}
        />
        <Stack.Screen
          name="Registration"
          component={Registration}
          options={({ navigation }) => ({
            title: 'Registration',
            headerShown: false,
            tabBarVisible: false,
            headerLeft: () => <HeaderLeft navigation={navigation} />,
            headerTitle: () => <HeaderTitle />,
          })}
        />
      </Stack.Navigator>
    )
  }
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={({ navigation }) => ({
          title: 'Home',
          headerLeft: () => <HeaderLeft navigation={navigation} />,
          headerTitle: () => <HeaderTitle />,
        })}
      />
      <Stack.Screen
        name="Details"
        component={Details}
        options={({ navigation }) => ({
          title: 'Details',
          headerLeft: () => <HeaderLeft navigation={navigation} />,
          headerTitle: () => <HeaderTitle />,
        })}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={({ navigation }) => ({
          title: 'Profile',
          headerLeft: () => <HeaderLeft navigation={navigation} />,
          headerTitle: () => <HeaderTitle />,
        })}
      />
      <Stack.Screen
        name="Counter"
        component={Counter}
        options={({ navigation }) => ({
          title: 'Counter',
          headerLeft: () => <HeaderLeft navigation={navigation} />,
          headerTitle: () => <HeaderTitle />,
        })}
      />
    </Stack.Navigator>
  )
}

export default AppStackNavigator
