import React from 'react'
import { View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import FontIcon from 'react-native-vector-icons/FontAwesome5'
import { colors } from '../../../theme'

// stack navigators
import {
  HomeNavigator,
  ProfileNavigator,
  CounterNavigator,
  RandomActivityNavigator,
} from '../stacks'

const Tab = createBottomTabNavigator()

const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      // eslint-disable-next-line react/prop-types
      tabBarIcon: ({ focused }) => {
        switch (route.name) {
          case 'Home':
            return (
              <FontIcon
                name="home"
                color={focused ? colors.moccasin : colors.white}
                size={20}
                solid
              />
            )
          case 'Profile':
            return (
              <FontIcon
                name="user"
                color={focused ? colors.moccasin : colors.white}
                size={20}
                solid
              />
            )
          case 'Counter':
            return (
              <FontIcon
                name="running"
                color={focused ? colors.moccasin : colors.white}
                size={20}
                solid
              />
            )
          case 'Random Activity':
            return (
              <FontIcon
                name="dumbbell"
                color={focused ? colors.lightPurple : colors.gray}
                size={20}
                solid
              />
            )
          default:
            return <View />
        }
      },
    })}
    tabBarOptions={{
      style: {
        elevation: 0,
        shadowOpacity: 0,
        borderBottomWidth: 0,
        borderTopWidth: 0.01,
        backgroundColor: colors.indigo,
      },
      activeTintColor: colors.moccasin,
      inactiveTintColor: colors.white,
    }}
    initialRouteName="Home"
    swipeEnabled={false}
  >
    <Tab.Screen name="Home" component={HomeNavigator} />
    <Tab.Screen name="Profile" component={ProfileNavigator} />
    <Tab.Screen name="Counter" component={CounterNavigator} />
    <Tab.Screen name="Random Activity" component={RandomActivityNavigator} />
  </Tab.Navigator>
)

export default TabNavigator
