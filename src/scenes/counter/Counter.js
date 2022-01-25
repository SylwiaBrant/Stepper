import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import { StyleSheet, View } from 'react-native'
import { colors } from 'theme'
import { Pedometer } from 'expo-sensors'
import {
  Text, Button, VStack, useToast,
} from 'native-base'
import PulseAnimation from 'components/PulseAnimation'
import DateTime from 'utils/datetime'
import WorkoutResultsRequest from '../../routes/WorkoutResultsRequest'

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: colors.lightGrayPurple,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  stopwatchBox: {
    backgroundColor: colors.darkSlateBlue,
    paddingVertical: 8,
    paddingTop: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    padding: 10,
    zIndex: 20, // ios
    elevation: 20, // android
  },
  stopwatchBoxText: {
    fontSize: 20,
    color: colors.white,
  },
})

const Counter = ({ navigation }) => {
  const { isLoggedIn, userId } = useSelector((state) => state.auth)
  const [isActive, setIsActive] = useState(false)
  const [currentStepCount, setCurrentStepCount] = useState(0)
  const [subscription, setSubscription] = useState(null)
  const [permissionsGranted, setPermissions] = useState(false)
  const [timeElapsed, setTimeElapsed] = useState(0)
  const [startingDate, setStartingDate] = useState('')

  const toast = useToast()

  async function askForPermissions() {
    try {
      await Pedometer.getPermissionsAsync()
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

  useEffect(() => {
    let interval = null

    if (isActive !== false) {
      interval = setInterval(() => {
        /* eslint-disable */
        setTimeElapsed((timeElapsed) => timeElapsed + 1)
        /* eslint-enable */
      }, 1000)
    } else {
      clearInterval(interval)
    }
    return () => {
      clearInterval(interval)
    }
  }, [isActive])

  const isPedometerAvailable = () => {
    Pedometer.isAvailableAsync().then(
      (result) => {
        if (!result) {
          toast.show({
            title: 'Unavailable',
            status: 'warning',
            description: 'Pedometer is not compatible with this device.',
          })
        }
        return result
      },
      (error) => {
        console.log(`Setting as: ${false} caught error: ${error}`)
        toast.show({
          title: 'Error',
          status: 'alert',
          description: 'Encountered error, while preparing pedometer',
        })
        return false
      },
    )
  }

  const onClickStart = () => {
    const subs = Pedometer.watchStepCount((result) => {
      setCurrentStepCount(result.steps)
    })
    isPedometerAvailable()
    setSubscription(subs)
    setIsActive(true)
    setStartingDate(new Date())
    console.log(startingDate)
  }

  const onClickCancel = () => {
    setIsActive(false)
    subscription.remove()
    setSubscription(null)
  }

  const onClickSave = async () => {
    const newWorkoutResult = {
      Typ: 'Walk',
      StepAmount: currentStepCount,
      StartDate: DateTime.formatDate(startingDate),
      EndDate: DateTime.formatDate(
        new Date(startingDate.getTime() + timeElapsed * 1000),
      ),
      ClientId: userId,
    }
    const result = WorkoutResultsRequest.createWorkoutResult(newWorkoutResult)
    if (result.status !== 200) {
      toast.show({
        title: 'Error',
        status: 'alert',
        description: 'Encountered error, while saving result',
      })
    }
  }

  const onClickReset = () => {
    setTimeElapsed(0)
    setCurrentStepCount(0)
  }
  return (
    <View style={styles.root}>
      <VStack space={10} w="100%" px="3" alignItems="center">
        <Text color="coolGray.800" fontSize="8xl">
          {currentStepCount}
        </Text>
        <View style={styles.stopwatchBox}>
          <Text style={styles.stopwatchBoxText}>
            {DateTime.formatTimeElapsed(timeElapsed)}
          </Text>
        </View>
        {isActive && <PulseAnimation />}
        {!isActive && timeElapsed !== 0 ? (
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
