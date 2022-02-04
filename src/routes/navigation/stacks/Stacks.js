import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { colors } from '../../../theme'
import Home from '../../../scenes/home'
import Profile from '../../../scenes/profile'
import Counter from '../../../scenes/counter'
import Login from '../../../scenes/login'
import Registration from '../../../scenes/registration'
import HeaderLeft from './HeaderLeft'
import HeaderTitle from './HeaderTitle'
import Forgot from '../../../scenes/forgot'
import Height from '../../../scenes/height'
import Weight from '../../../scenes/weight'
import Goal from '../../../scenes/goal'
import Date from '../../../scenes/date'
import Gender from '../../../scenes/gender'

// ------------------------------------
// Constants
// ------------------------------------

const Stack = createStackNavigator()
const AuthStack = createStackNavigator()

const navigationProps = {
  headerTintColor: 'lightcyan',
  headerStyle: {
    backgroundColor: colors.lightcyan,
    elevation: 0,
    shadowOpacity: 0,
    borderBottomWidth: 0,
  },
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
      options={() => ({
        headerShown: false,
      })}
    />
    <AuthStack.Screen
      name="Registration"
      component={Registration}
      options={() => ({
        headerShown: false,
      })}
    />
    <AuthStack.Screen
      name="Forgot"
      component={Forgot}
      options={() => ({
        headerShown: false,
      })}
    />
    <AuthStack.Screen
      name="Height"
      component={Height}
      options={() => ({
        headerShown: false,
      })}
    />
    <AuthStack.Screen
      name="Weight"
      component={Weight}
      options={() => ({
        headerShown: false,
      })}
    />
    <AuthStack.Screen
      name="Goal"
      component={Goal}
      options={() => ({
        headerShown: false,
      })}
    />
    <AuthStack.Screen
      name="Date"
      component={Date}
      options={() => ({
        headerShown: false,
      })}
    />
    <AuthStack.Screen
      name="Gender"
      component={Gender}
      options={() => ({
        headerShown: false,
      })}
    />
  </AuthStack.Navigator>
)

export const HomeNavigator = () => (
  <Stack.Navigator
    initialRouteName="Home"
    headerMode="screen"
    screenOptions={navigationProps}
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
