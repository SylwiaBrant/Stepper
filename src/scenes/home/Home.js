import React from 'react'
import PropTypes from 'prop-types'
import {
  StatusBar, StyleSheet, Text, View,
} from 'react-native'
import Button from '../../components/Button'
import { colors } from '../../theme'

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.lightcyan,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
})

const Home = ({ navigation }) => (
  <View style={styles.root}>
    <StatusBar barStyle="light-content" />
    <Text style={styles.title}>Home</Text>
    <Button
      color="white"
      backgroundColor={colors.indigo}
      onPress={() => navigation.navigate('Counter', { from: 'Home' })}
    />
  </View>
)

Home.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }),
}

Home.defaultProps = {
  navigation: { navigate: () => null },
}

export default Home
