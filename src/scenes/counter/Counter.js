import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import { StyleSheet, View } from 'react-native'
import { colors } from 'theme'
import FontIcon from 'react-native-vector-icons/FontAwesome5'
import { Pedometer } from 'expo-sensors'
import {
  Text, Button, Heading, VStack, useToast,
} from 'native-base'
import Timer from 'components/Timer'

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

const Counter = ({ navigation }) => {
  const { isLoggedIn } = useSelector((state) => state.auth)
  const [isAvailable, setAvailable] = useState(false)
  const [isActive, setActive] = useState(false)
  const [currentStepCount, setCurrentStepCount] = useState(0)
  const [subscription, setSubscription] = useState(null)
  const [permissionsGranted, setPermissions] = useState(false)

  const toast = useToast()

  async function askForPermissions() {
    try {
      await Pedometer.getPermissionsAsync()
      toast.show({
        title: 'Successfully connected',
        status: 'success',
        description: 'Permissions granted.',
      })
    } catch (err) {
      console.log(err)
      toast.show({
        title: 'Error',
        status: 'alert',
        description: "Can't get permissions to use pedometer",
      })
    }
    setPermissions(true)
  }

  useEffect(() => {
    if (isLoggedIn) {
      console.log(
        `Navigating to Login from Profile. is logged in state: ${isLoggedIn}`,
      )
      navigation.navigate('Login', { from: 'Counter' })
    }
    return () => {
      if (subscription) {
        subscription.remove()
        setSubscription(null)
      }
    }
  }, [])

  useEffect(() => {
    if (!permissionsGranted) {
      askForPermissions()
    }
  }, [permissionsGranted])

  const isPedometerAvailable = () => {
    Pedometer.isAvailableAsync().then(
      (result) => {
        console.log(`Setting as: ${result}`)
        setAvailable(result)
        return result
      },
      (error) => {
        console.log(`Setting as: ${false} caught error: ${error}`)
        setAvailable(false)
        return false
      },
    )
  }

  const onClickStart = () => {
    const subs = Pedometer.watchStepCount((result) => {
      setCurrentStepCount(result.steps)
    })
    if (!isPedometerAvailable) {
      toast.show({
        title: 'Unavailable',
        status: 'warning',
        description: 'Pedometer is not compatible with this device.',
      })
    }
    setSubscription(subs)
    setActive(true)
  }

  const onClickCancel = () => {
    console.log(subscription)
    subscription.remove()
    setSubscription(null)
    setActive(false)
  }

  const onClickSave = () => {
    console.log('Calling POST on API')
  }

  const onClickReset = () => {
    setCurrentStepCount(0)
  }

  if (isAvailable) {
    return (
      <View style={styles.root}>
        <VStack space={2} alignItems="center">
          <FontIcon
            name="exclamation-triangle"
            color="#9f1239"
            size={80}
            solid
          />
          <Text marginTop="40px">Pedometer is unavailable on this device.</Text>
        </VStack>
      </View>
    )
  }
  return (
    <View style={styles.root}>
      <VStack space={4} w="100%" px="3" alignItems="center">
        <Heading textAlign="center" size="md">
          Count your steps
        </Heading>
        <Text color="coolGray.800" fontWeight="bold" fontSize="6xl">
          {currentStepCount}
        </Text>
        <Timer />
        {!isActive && currentStepCount !== 0 ? (
          <Button.Group
            mx={{
              base: 'auto',
              md: 100,
            }}
            size="md"
          >
            <Button
              width="40%"
              colorScheme="info"
              variant="outline"
              onPress={onClickReset}
            >
              RESET
            </Button>
            <Button width="40%" colorScheme="info" onPress={onClickSave}>
              SAVE
            </Button>
          </Button.Group>
        ) : (
          <Button
            width="50%"
            size="md"
            colorScheme="primary"
            onPress={isActive ? onClickCancel : onClickStart}
          >
            {isActive ? 'STOP' : 'START'}
          </Button>
        )}
      </VStack>
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
