import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {
  StyleSheet, Text, View, StatusBar,
} from 'react-native'
import { Button } from 'native-base'
import { colors } from 'theme'
import { Pedometer } from 'expo-sensors';

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
  const [buttonTitle, setButtonTitle] = useState('Start');
  const [currentStepCount, setCurrentStepCount] = useState(0);
  let subscription;

  const onClickHandler = () => {
    if (buttonTitle === 'Start') {
      setButtonTitle('Stop');
      subscription = Pedometer.watchStepCount(result => {
        setCurrentStepCount(result.steps)
      });
    } else {
      setButtonTitle('Start');
      subscription && subscription.remove();
      subscription = null;
    }
  }

  return (
    <View style={styles.root}>
      <Button
        color="black"
        backgroundColor={colors.pink}
        onPress={onClickHandler}
      >
        {buttonTitle}
      </Button>
      <StatusBar barStyle="light-content" />
      <Text>Steps: {currentStepCount}</Text>
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
