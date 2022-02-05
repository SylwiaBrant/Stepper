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
    backgroundColor: colors.lightcyan,
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

const Counter = ({ navigation }) => { // eslint-disable-line no-unused-vars
  const { isLoggedIn, user } = useSelector((state) => state.auth)
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

  useEffect(
    () => () => {
      if (subscription) {
        subscription.remove()
        setSubscription(null)
      }
    },
    [],
  )

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
            description: 'Pedometer is not compatible with this device',
          })
        }
        return result
      },
      (error) => {
        toast.show({
          title: 'Error',
          status: 'alert',
          description: `Encountered error, while preparing pedometer${error}`,
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
      Type: 'Walk',
      StepAmount: currentStepCount,
      StartDate: DateTime.formatDate(startingDate),
      EndDate: DateTime.formatDate(
        new Date(startingDate.getTime() + timeElapsed * 1000),
      ),
      ClientId: user.Id,
    }
    const result = await WorkoutResultsRequest.createWorkoutResult(
      newWorkoutResult,
    )
    if (result instanceof String) {
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
        <Text style={{ fontSize: 30, color: colors.indigo, fontWeight: "bold" }}>
          Step counter
        </Text>
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
          <Button.Group>
            <Button
              _text={{
                fontSize: 'xs',
                color: '#ffffff',
              }}
              backgroundColor={colors.indigo}
              alignSelf="flex-end"
              mt="1"
              width="20"
              onPress={onClickReset}
            >
              Reset
            </Button>
            <Button
              _text={{
                fontSize: 'xs',
                color: '#ffffff',
              }}
              backgroundColor={colors.indigo}
              alignSelf="flex-end"
              mt="1"
              width="20"
              onPress={onClickSave}
            >
              Save
            </Button>
          </Button.Group>
        ) : (
          <Button
            width="50%"
            size="md"
            color="white"
            backgroundColor={colors.indigo}
            onPress={isActive ? onClickCancel : onClickStart}
          >
            {isActive ? 'Stop' : 'Start'}
          </Button>
        )}
      </VStack>
    </View>
  )
}

Counter.propTypes = {
  navigation: PropTypes.shape({
    goBack: PropTypes.func,
  }),
}

Counter.defaultProps = {
  navigation: { goBack: () => null },
}

export default Counter
