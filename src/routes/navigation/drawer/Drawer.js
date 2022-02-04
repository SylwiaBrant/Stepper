import React from 'react'
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer'
import DrawerMenu from './DrawerMenu'
import TabNavigator from '../tabs'
import Counter from '../../../scenes/counter'
import { colors } from '../../../theme'

const Drawer = createDrawerNavigator()

const DrawerMenuContainer = (props) => {
  const { state, ...rest } = props
  const newState = { ...state }
  return (
    <DrawerContentScrollView {...props}>
      <DrawerMenu {...props} />
      <DrawerItemList state={newState} {...rest} />
    </DrawerContentScrollView>
  )
}

const DrawerNavigator = () => (
  <Drawer.Navigator initialRouteName="Home" drawerContent={DrawerMenuContainer} activeBackgroundColor="indigo">
    <Drawer.Screen name="Home" component={TabNavigator} />
    <Drawer.Screen name="Profile" component={TabNavigator} />
    <Drawer.Screen name="Counter" component={TabNavigator} />
  </Drawer.Navigator>
)

export default DrawerNavigator
