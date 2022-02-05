import React, { useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import {
  VStack, Button, useToast, Text, Select, CheckIcon,
} from 'native-base'
import { colors } from 'theme'
import { useSelector } from 'react-redux'
import WorkoutResultsRequest from '../../routes/WorkoutResultsRequest'
import DateTime from '../../utils/datetime'

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.lightcyan,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
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

const RandomActivity = () => {
  const { isLoggedIn, user } = useSelector((state) => state.auth)
  console.log(user)
  const [type, setType] = useState(undefined)
  const [startDate, setStartDate] = useState(undefined)
  const [timer, setTimer] = useState(0)
  const [isActive, setIsActive] = useState(false)
  const [isInputBlocked, setInputBlocked] = useState(false)
  const toast = useToast()
  useEffect(() => {
    let interval = null

    if (isActive !== false) {
      interval = setInterval(() => {
        setTimer(timer + 1)
      }, 1000)
    } else {
      clearInterval(interval)
    }
    return () => {
      clearInterval(interval)
    }
  }, [isActive])

  const onClickReset = () => {
    setTimer(0)
  }

  const onClickStart = () => {
    if (type === undefined) {
      toast.show({
        title: 'Error',
        status: 'alert',
        description: 'Fill all information',
      })
      return
    }
    setStartDate(new Date())
    setIsActive(true)
    setInputBlocked(true)
  }

  const onClickCancel = () => {
    setIsActive(false)
    setInputBlocked(false)
  }
  const onContinue = () => {
    setIsActive(true)
  }

  const onClickSave = async () => {
    const newWorkoutResult = {
      Type: type,
      StartDate: DateTime.formatDate(startDate),
      EndDate: DateTime.formatDate(new Date()),
      ClientId: user.Id,
      StepAmount: 0,
    }
    const result = WorkoutResultsRequest.createWorkoutResult(newWorkoutResult)
    if (result.status !== 200) {
      toast.show({
        title: 'Error',
        status: 'alert',
        description: result.message,
      })
    }
  }

  return (
    <View style={styles.root}>
      <VStack space={10} w="100%" px="3" alignItems="center">
        <View style={styles.viewOne}>
          <Text style={{ fontSize: 30, color: colors.indigo, fontWeight: "bold" }}>
            Random activity
          </Text>
        </View>
        <Select
          selectedValue={type}
          minWidth="200"
          accessibilityLabel="Choose activity"
          placeholder="Choose activity"
          _selectedItem={{
            bg: 'teal.600',
            endIcon: <CheckIcon size="5" isDisabled={isInputBlocked} />,
          }}
          mt={1}
          onValueChange={(value) => setType(value)}
        >
          <Select.Item label="Running" value="Running" />
          <Select.Item label="Pool Swimming" value="Pool Swimming" />
          <Select.Item label="Cycling" value="Cycling" />
          <Select.Item label="Freestyle" value="Freestyle" />
          <Select.Item label="Yoga" value="Yoga" />
        </Select>
        <View style={styles.stopwatchBox}>
          <Text style={styles.stopwatchBoxText}>
            {DateTime.formatTimeElapsed(timer)}
          </Text>
        </View>
        {!isActive && timer !== 0 ? (
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
          <View />
      </VStack>
    </View>
  )
}

export default RandomActivity
