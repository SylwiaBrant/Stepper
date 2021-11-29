import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {
  StyleSheet, View, StatusBar,
} from 'react-native'
import { colors } from 'theme'
import { Pedometer } from 'expo-sensors';
import {
  Text,
  Button,
  Spacer,
  Flex,
  Center,
  Heading,
  ScrollView,
  VStack,
  Divider,
  Box
  } from 'native-base';

const START = "START";
const STOP = "STOP";

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
  const [isActive, setActive] = useState(false);
  const [currentStepCount, setCurrentStepCount] = useState(0);
  const [subscription, setSubscription] = useState(null);

  const onClickStart = () => {
      let subs = Pedometer.watchStepCount(result => {
        setCurrentStepCount(result.steps);
      });
      setSubscription(subs);
      setActive(true);
  }

  const onClickCancel = () => {
      console.log(subscription)
      subscription.remove();
      setSubscription(null);
      setActive(false);
  }

  const onClickSave = () => {
    console.log('Calling POST on API')
  }

  const onClickReset = () => {
    setCurrentStepCount(0);
  }
  return (
    <View style={styles.root}>
      <Box flex="1" safeAreaTop>
        <ScrollView>
          <VStack space={4} w="100%" px="3" alignItems="center">
            <Heading textAlign="center" size="md">Count your steps</Heading>
              { isActive ?
                <Button
                width="50%"
                size="md"
                colorScheme="primary"
                onPress={onClickCancel}
              >
                CANCEL
              </Button> : <Button
                width="50%"
                size="md"
                colorScheme="primary"
                onPress={onClickStart}
              >
                START
              </Button>
              }

              <Spacer />
              <StatusBar barStyle="light-content" />
              <Text color="coolGray.800" fontWeight="bold" fontSize="4xl">{currentStepCount}</Text>
            <Button.Group
              mx={{
                base: "auto",
                md: 100,
              }}
              size="md"
            >
              <Button width="40%" colorScheme="info" variant="outline" onPress={onClickReset}>RESET</Button>
              <Button width="40%" colorScheme="info" onPress={onClickSave}>SAVE</Button>
            </Button.Group>
          </VStack>
        </ScrollView>
      </Box>
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
