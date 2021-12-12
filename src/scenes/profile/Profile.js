import React from 'react'
import PropTypes from 'prop-types'
import {
  StyleSheet, View, Text, StatusBar,
} from 'react-native'
import Button from 'components/Button'
import { colors } from 'theme'
import { Box, Flex, HStack, Center, Divider } from 'native-base'
import { useSelector, useDispatch } from 'react-redux';
import FontIcon from 'react-native-vector-icons/FontAwesome5'


const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
//    backgroundColor: "#847216",
  },
  title: {
    color: '#57534e',
    fontSize: 24,
    marginBottom: 20,
  },
  profileUpperDashboard: {
    width: "100%",
    backgroundColor: '#AD8fCA',
    borderBottomLeftRadius: 200,
    borderBottomRightRadius: 200,
  },
  profileLowerDashboard: {
    width: "100%",
    backgroundColor: '#AD86CA',
  },
  badge: {
    width: "90%",
    height: 60,
    paddingHorizontal: 8,
    paddingVertical: 6,
    backgroundColor: 'rgba(256, 256, 256, 0.2)',
    borderRadius: 4,
    borderColor: "#fff",
    borderStyle: "solid",
    borderWidth: 0.5,
  },
  badgeText: {
      fontSize: 15,
      color: colors.white,
  }
})

const Profile = ({ navigation }) => {
  const { isLoggedIn, user } = useSelector(state => state.auth);
  if (isLoggedIn) {
    //history.push("/counter");
    console.log("Navigating to Login from Home. is logged in state: " + isLoggedIn);
  }
  return (
    <View style={styles.root}>
      <View alignItems="center" flex="1" w="100%"
        style={styles.profileUpperDashboard} flex="1">
          <Text style={styles.title}>Profile</Text>

          <Text>Lukas09</Text>
          <Divider my={2} />
          <FontIcon
            name="ruler"
            color={colors.white}
            size={20}
            solid
          />
          <Text>Waga:</Text>
          <FontIcon
            name="weight"
            color={colors.white}
            size={20}
            solid
          />
          <Text>Wzrost:</Text>
      </View>
      <View flex="1" flexDirection="column" justifyContent="space-evenly" alignItems="center" style={styles.profileLowerDashboard}>
        <View style={styles.badge} flexDirection="row" alignItems="center" justifyContent="space-evenly">
          <FontIcon
            name="clock"
            color={colors.white}
            size={20}
            regular
          />
          <Text style={styles.badgeText}>AVG. ACTIVITY TIME:</Text>
          <Text style={styles.badgeText}>21 MIN.</Text>
        </View>
        <View style={styles.badge} flexDirection="row" alignItems="center" justifyContent="space-evenly">
          <FontIcon
            name="shoe-prints"
            color={colors.white}
            size={20}
            solid
          />
          <Text style={styles.badgeText}>AVG. STEPS NUMBER</Text>
          <Text style={styles.badgeText}>6571</Text>
        </View>
        <View style={styles.badge} flexDirection="row" alignItems="center" justifyContent="space-evenly">
          <FontIcon
            name="running"
            color={colors.white}
            size={20}
            solid
          />
          <Text style={styles.badgeText}>MOST POPULAR ACTIVITY:</Text>
          <Text style={styles.badgeText}>WALKING</Text>
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
