import React from 'react'
import { StyleSheet, Image } from 'react-native'
import { images } from 'theme'
import FontIcon from 'react-native-vector-icons/MaterialIcons'

const HeaderTitle = () =>
  <FontIcon
    name="run-circle"
    size={35}
    solid
  />

HeaderTitle.propTypes = {}
HeaderTitle.defaultProps = {}

export default HeaderTitle
