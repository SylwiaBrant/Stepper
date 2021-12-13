import React from 'react'
import PropTypes from 'prop-types'
import {
  StyleSheet, View, Text, Image,
} from 'react-native'
import { colors } from 'theme'
import { useSelector } from 'react-redux'
import FontIcon from 'react-native-vector-icons/FontAwesome5'

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

const Profile = ({ navigation }) => {
  const { isLoggedIn } = useSelector((state) => state.auth)
  if (isLoggedIn) {
    console.log(
      `Navigating to Login from Profile. is logged in state: ${isLoggedIn}`,
    )
    navigation.navigate('Login', { from: 'Profile' })
  }
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
          <Text style={{ fontSize: 40, color: colors.white }}>Lukas09</Text>
        </View>
        <View flexDirection="row" justifyContent="space-evenly">
          <View flexDirection="column" alignItems="center">
            <FontIcon name="ruler" color={colors.white} size={20} solid />
            <Text style={{ fontSize: 15, color: colors.white }}>
              Weight: 85kg
            </Text>
          </View>
          <View flexDirection="column" alignItems="center">
            <FontIcon name="weight" color={colors.white} size={20} solid />
            <Text style={{ fontSize: 15, color: colors.white }}>
              Height: 1,78 m{' '}
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
          <Text style={[styles.badgeText, styles.outcome]}>21 min.</Text>
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
          <Text style={[styles.badgeText, styles.outcome]}>6571</Text>
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
          <Text style={[styles.badgeText, styles.outcome]}>Walking</Text>
        </View>
      </View>
    </View>
  )
}

Profile.propTypes = {
  navigation: PropTypes.shape({ navigate: PropTypes.func }),
}

Profile.defaultProps = {
  navigation: { navigate: () => null },
}

export default Profile
