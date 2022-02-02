import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { colors } from 'theme'
import Home from '../../../scenes/home'
import Profile from '../../../scenes/profile'
import Counter from '../../../scenes/counter'
import Login from '../../../scenes/login'
import Registration from '../../../scenes/registration'
import HeaderLeft from './HeaderLeft'
import HeaderTitle from './HeaderTitle'

// ------------------------------------
// Constants
// ------------------------------------

const Stack = createStackNavigator()
const AuthStack = createStackNavigator()

const navigationProps = {
  headerTintColor: 'white',
  headerStyle: { backgroundColor: colors.darkPurple },
  headerTitleStyle: { fontSize: 18 },
}

// ------------------------------------
// Navigators
// ------------------------------------

export const AuthStackScreen = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen
      name="Login"
      component={Login}
    />
    <AuthStack.Screen
      name="Registration"
      component={Registration}
    />
  </AuthStack.Navigator>
)

export const HomeNavigator = () => (
  <Stack.Navigator
    initialRouteName="Home"
    headerMode="screen"
  >
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
      name="Counter"
      component={Counter}
      options={({ navigation }) => ({
        title: 'Home',
        headerLeft: () => <HeaderLeft navigation={navigation} />,
        headerTitle: () => <HeaderTitle />,
      })}
    />
    <Stack.Screen
      name="Login"
      component={Login}
      options={{
        title: 'Login',
      }}
    />
  </Stack.Navigator>
)

export const ProfileNavigator = () => (
  <Stack.Navigator
    initialRouteName="Profile"
    headerMode="screen"
    screenOptions={navigationProps}
  >
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
    <Stack.Screen
      name="Login"
      component={Login}
      options={{
        title: 'Login',
      }}
    />
  </Stack.Navigator>
)

export const CounterNavigator = () => (
  <Stack.Navigator
    initialRouteName="Counter"
    headerMode="screen"
    screenOptions={navigationProps}
  >
    <Stack.Screen
      name="Counter"
      component={Counter}
      options={({ navigation }) => ({
        title: 'Counter',
        headerLeft: () => <HeaderLeft navigation={navigation} />,
        headerTitle: () => <HeaderTitle />,
      })}
    />
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
      name="Profile"
      component={Profile}
      options={({ navigation }) => ({
        title: 'Profile',
        headerLeft: () => <HeaderLeft navigation={navigation} />,
        headerTitle: () => <HeaderTitle />,
      })}
    />
    <Stack.Screen
      name="Login"
      component={Login}
      options={{
        title: 'Login',
      }}
    />
  </Stack.Navigator>
)
