import React, { useState, useEffect } from 'react'
import { Text, View } from 'react-native'

const Timer = () => {
  const [time, setTime] = useState({ hour: 0, min: 0, sec: 0 })
  useEffect(() => {
    // let countie = 0
    setInterval(() => {
      if (time.sec !== 59) {
        setTime({
          sec: (time.sec += 1),
          min: time.min,
          hour: time.hour,
        })
      } else if (time.min !== 59) {
        setTime({
          sec: 0,
          min: (time.min += 1),
          hour: time.hour,
        })
      } else {
        setTime({
          sec: 0,
          min: 0,
          hour: (time.hour += 1),
        })
      }
      console.log(time.sec + time.min + time.hour)
    }, 1000)
  }, [])

  return (
    <View>
      <Text>
        {time.hour} | {time.min} | {time.sec}
      </Text>
    </View>
  )
}

export default Timer
