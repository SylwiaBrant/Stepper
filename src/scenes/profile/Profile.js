import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import {
  StyleSheet, View, Text, Image,
} from 'react-native'
import { useToast } from 'native-base'
import { colors } from 'theme'
import { useSelector } from 'react-redux'
import FontIcon from 'react-native-vector-icons/FontAwesome5'
import DateTime from 'utils/datetime'
import WorkoutResultsRequest from '../../routes/WorkoutResultsRequest'

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#57534e',
    fontSize: 24,
    marginBottom: 20,
  },
  profileUpperDashboard: {
    width: '100%',
  },
  profileLowerDashboard: {
    width: '100%',
    backgroundColor: colors.white,
  },
  badge: {
    width: '90%',
    height: 60,
    paddingHorizontal: 8,
    paddingVertical: 6,
  },
  badgeText: {
    fontSize: 15,
    color: '#87cefa',
  },
  transparentBadge: {
    width: '90%',
    height: 60,
    paddingHorizontal: 8,
    paddingVertical: 6,
    backgroundColor: 'rgba(256, 256, 256, 0.2)',
  },
  middleBadge: {
    position: 'absolute',
    top: -16,
    backgroundColor: colors.lightBlue,
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  outcome: {
    fontSize: 25,
    color: colors.darkSlateBlue,
  },
})

const Profile = ({ navigation }) => { // eslint-disable-line no-unused-vars
  const { isLoggedIn, user } = useSelector((state) => state.auth)
  const [workoutResult, setWorkoutResult] = useState('NULL')
  const toast = useToast()

  const fetchUserInfo = async () => {
    const result = await WorkoutResultsRequest.getWorkoutResults(0)
    if (result.statusCode !== 200) {
      toast.show({
        title: 'Error',
        status: 'alert',
        description: 'Encountered error, while saving result',
      })
    } else {
      setWorkoutResult(result[0])
    }
  }

  useEffect(() => {
    if (workoutResult === 'NULL') {
      fetchUserInfo()
    }
  }, [])

  return (
    <View style={styles.root}>
      <View
        flex="1"
        flexDirection="column"
        justifyContent="space-evenly"
        style={styles.profileUpperDashboard}
      >
        <Image
          style={[StyleSheet.absoluteFill, styles.image]}
          source={require('../../../assets/images/blue-bg.png')}
        />
        <View alignItems="center">
          <Text style={{ fontSize: 40, color: colors.white }}>
            {user.Login}
          </Text>
        </View>
        <View flexDirection="row" justifyContent="space-evenly">
          <View flexDirection="column" alignItems="center">
            <FontIcon name="transgender" color={colors.white} size={20} solid />
            <Text style={{ fontSize: 15, color: colors.white }}>
              Gender: {user.Gender}
            </Text>
          </View>
          <View flexDirection="column" alignItems="center">
            <FontIcon name="calendar" color={colors.white} size={20} solid />
            <Text style={{ fontSize: 15, color: colors.white }}>
              Age: {user.Birthday}
            </Text>
          </View>
        </View>
        <View flexDirection="row" justifyContent="space-evenly">
          <View flexDirection="column" alignItems="center">
            <FontIcon name="weight" color={colors.white} size={20} solid />
            <Text style={{ fontSize: 15, color: colors.white }}>
              Weight: {user.Width} kg
            </Text>
          </View>
          <View flexDirection="column" alignItems="center">
            <FontIcon name="ruler" color={colors.white} size={20} solid />
            <Text style={{ fontSize: 15, color: colors.white }}>
              Height: {user.Height} m{' '}
            </Text>
          </View>
        </View>
      </View>
      <View
        flex="1"
        flexDirection="column"
        justifyContent="space-evenly"
        alignItems="center"
        style={styles.profileLowerDashboard}
      >
        <View style={styles.middleBadge}>
          <Text
            style={{ fontSize: 16, color: colors.white, fontWeight: 'bold' }}
          >
            This month:
          </Text>
        </View>
        <View
          style={styles.badge}
          flexDirection="row"
          alignItems="center"
          justifyContent="space-around"
        >
          <View flexDirection="column" alignItems="center">
            <FontIcon name="clock" color={colors.lightBlue} size={20} regular />
            <Text style={styles.badgeText}>Avg. time:</Text>
          </View>
          <Text style={[styles.badgeText, styles.outcome]}>
            {DateTime.formatTimeElapsed(
              (new Date(workoutResult.EndDate).getTime()
                - new Date(workoutResult.StartDate).getTime())
                / 1000,
            )}
          </Text>
        </View>
        <View
          style={styles.badge}
          flexDirection="row"
          alignItems="center"
          justifyContent="space-around"
        >
          <View flexDirection="column" alignItems="center">
            <FontIcon
              name="shoe-prints"
              color={colors.lightBlue}
              size={20}
              solid
            />
            <Text style={styles.badgeText}>Avg. steps:</Text>
          </View>
          <Text style={[styles.badgeText, styles.outcome]}>
            {workoutResult.StepAmount}
          </Text>
        </View>
        <View
          style={styles.badge}
          flexDirection="row"
          alignItems="center"
          justifyContent="space-around"
        >
          <View flexDirection="column" alignItems="center">
            <FontIcon name="running" color={colors.lightBlue} size={20} solid />
            <Text style={styles.badgeText}>Fav activity:</Text>
          </View>
          <Text style={[styles.badgeText, styles.outcome]}>
            {workoutResult.Type}
          </Text>
        </View>
      </View>
    </View>
  )
}

Profile.propTypes = {
  navigation: PropTypes.shape({
    goBack: PropTypes.func,
  }),
}

Profile.defaultProps = {
  navigation: { navigate: () => null },
}

export default Profile
