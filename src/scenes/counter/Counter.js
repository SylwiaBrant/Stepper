import React from 'react'
import PropTypes from 'prop-types'
import {
  StyleSheet, Text, View, StatusBar, Button,
} from 'react-native'
import { colors } from 'theme'

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.lightGrayPurple,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
})

const Counter = ({ route, navigation }) => {
  const from = route?.params?.from
  return (
    <View style={styles.root}>
      <StatusBar barStyle="light-content" />
      <Text style={styles.title}>{`Details (from ${from})`}</Text>
      <Button
        title="Start"
        color="white"
        backgroundColor={colors.pink}
        onPress={navigation.goBack}
      />
    </View>
  )
}

Counter.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({ from: PropTypes.string }),
  }),
  navigation: PropTypes.shape({
    goBack: PropTypes.func,
  }),
}

Counter.defaultProps = {
  route: { params: { from: '' } },
  navigation: { goBack: () => null },
}

export default Counter
