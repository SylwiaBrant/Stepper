import React from 'react'
import { colors } from 'theme'
import { StyleSheet, View } from 'react-native'

const Pulse = require('react-native-pulse').default

const styles = StyleSheet.create({
  position: {
    position: 'absolute',
    marginTop: -20,
    zIndex: -20, // ios
    elevation: -20, // android
  },
})

const PulseAnimation = () => (
  <View style={styles.position}>
    <Pulse
      style={styles.position}
      pulseStyle={styles.circle}
      color={colors.lightSteelBlue}
      numPulses={1}
      diameter={300}
      speed={10}
      duration={500}
    />
  </View>
)

export default PulseAnimation
