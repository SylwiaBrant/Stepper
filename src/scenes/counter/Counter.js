import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {
  StyleSheet, Text, View, StatusBar,
} from 'react-native'
import { Button } from 'native-base'
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

const Counter = () => {
  const [buttonTitle, setButtonTitle] = useState('Start')

  const onClickHandler = () => {
    setButtonTitle(buttonTitle === 'Start' ? 'Stop' : 'Start')
  }
  const state = {
    stepCount: 0,
  }
  return (
    <View style={styles.root}>
      <Button
        color="black"
        backgroundColor={colors.lightskyblue}
        onPress={onClickHandler}
      >
        {buttonTitle}
      </Button>
      <StatusBar barStyle="light-content" />
      <Text>Steps: {state.stepCount}</Text>
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
