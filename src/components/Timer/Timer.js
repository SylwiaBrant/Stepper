import React, { useState, useEffect } from 'react'
import { Text, View } from 'react-native'

const Timer = () => {
  const [seconds, setSeconds] = useState(0)
  useEffect(() => {
    const countie = 0
    setInterval(() => {
      setSeconds(countie + 1)
      console.log('1 sec.')
    }, 1000)
  }, [])

  return (
    <View>
      <Text>{seconds}</Text>
    </View>
  )
}

export default Timer
