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
    color: colors.indigo,
  },
  viewOne:{
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 50,
  },
  viewSecond:{
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
    width: "70%",
    textAlign: 'justify',
  },
})

const Home = ({ navigation }) => (
  <View style={styles.root}>
    <StatusBar barStyle="light-content" />
    <View style={styles.viewOne}>
    <Text style={{ fontSize: 30, color: colors.indigo, fontWeight: "bold" }}>
      Welcome in Stepper App
    </Text>
    </View>
    <View style={styles.viewSecond}>
    <Text style={{ fontSize: 15, color: colors.gray, fontWeight: "bold" }}>
      Our app uses a built-in sensor to count your steps. The collected information will be clearly presented in a summary of your activity.
    </Text>
    </View>
    <Button
      title="Get started"
      color="white"
      fontWeight="medium"
      backgroundColor={colors.indigo}
      onPress={() => navigation.navigate('Counter')}
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
