import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import {
  StyleSheet, View, Text,
} from 'react-native'
import { useToast } from 'native-base'
import { colors } from '../../theme'
import { useSelector } from 'react-redux'
import FontIcon from 'react-native-vector-icons/FontAwesome5'
import DateTime from '../../utils/datetime'
import WorkoutResultsRequest from '../../routes/WorkoutResultsRequest'
import store from '../../utils/store'

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.lightcyan,
  },
  dataView:{
    flex: 1,
    backgroundColor: colors.indigo,
    borderColor: colors.indigo,
    borderWidth: 5,
    borderRadius: 22,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 5,
    marginRight: 5,
    paddingRight: 120,
    paddingVertical: 30,
  },
  iconView:{
    marginLeft: 8,
    marginRight: 10,
    color: colors.white,
  },
  netView:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '50%',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  monthView:{
    backgroundColor: colors.indigo,
    borderColor: colors.indigo,
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginTop: 10,
    marginBottom: 10,
  },
  avgView:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avgViewS:{
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    justifyContent: 'center',
  },
  iconViewS:{
    marginRight: 8,
    color: colors.lightPurple,
  },
  badgeText: {
    fontSize: 20,
    color: colors.lightPurple,
    fontWeight: 'bold',
  },
  outcome: {
    fontSize: 25,
    color: colors.darkSlateBlue,
  },
  border:{
    borderColor: colors.indigo,
    borderWidth: 2,
    paddingVertical: 30,
    paddingHorizontal: 30,
    borderRadius: 20,
    marginTop: 50,
  },
})

const Profile = ({ navigation }) => {
  // eslint-disable-line no-unused-vars
  const { isLoggedIn, user } = useSelector((state) => state.auth)
  const [workoutResult, setWorkoutResult] = useState('NULL')
  const [workoutResult_Date, setWorkoutResult_Date] = useState('NULL')
  const toast = useToast()
  console.log(store.getState())

  const fetchUserInfo = async () => {
    const result = await WorkoutResultsRequest.getWorkoutResults(user.Id)
    console.log(result)
    console.log(user.Id)
    if (result.statusCode !== 200) {
      toast.show({
        title: 'Error',
        status: 'alert',
        description: 'Encountered error, while saving result',
      })
    } else {
      setWorkoutResult(result[0])
      setWorkoutResult_Date(DateTime.formatTimeElapsed(
        (new Date(workoutResult_Date.EndDate).getTime()
          - new Date(workoutResult_Date.StartDate).getTime())
        / 1000,
      ))
      console.log('Data')
      console.log(result[0])
    }
  }

  useEffect(() => {
    if (workoutResult === 'NULL') {
      fetchUserInfo()
    }
  }, [])

  return (
    <View style={styles.root}>
        <View>
          <Text style={{ fontSize: 30, color: colors.indigo, fontWeight: "bold" }}>
            Your personal information
          </Text>
        </View>
        <View style={styles.netView}>
          <View style={styles.dataView}>
            <FontIcon style={styles.iconView} name="transgender" size={20} />
            <Text style={{ fontSize: 15, color: colors.white }}>
              Gender: {user.Gender}
            </Text>
          </View>
          <View style={styles.dataView}>
            <FontIcon style={styles.iconView} name="calendar" color={colors.white} size={20}/>
            <Text style={{ fontSize: 15, color: colors.white }}>
              Age: {user.Birthday}
            </Text>
          </View>
        </View>
          <View style={styles.netView}>
          <View style={styles.dataView}>
            <FontIcon style={styles.iconView} name="weight" size={20} />
            <Text style={{ fontSize: 15, color: colors.white }} >
              Weight: {user.Width}
            </Text>
          </View>
          <View style={styles.dataView}>
            <FontIcon style={styles.iconView} name="ruler" size={20} />
            <Text style={{ fontSize: 15, color: colors.white }}>
              Height: {user.Height}
            </Text>
          </View>
          </View>
      <View style={styles.border}>
        <View style={styles.monthView}>
          <Text style={{ fontSize: 16, color: colors.white, fontWeight: 'bold' }} >
            This month:
          </Text>
        </View>
        {/*   <View style={styles.avgView}> */}
        {/*     <FontIcon style={styles.iconViewS} name="clock" size={20} /> */}
        {/*     <Text style={styles.badgeText}>Average time:</Text> */}
        {/*   </View> */}
        {/* <View style={styles.avgViewS}> */}
        {/*   <Text style={[styles.badgeText, styles.outcome]}> */}
        {/*     {workoutResult_Date} */}
        {/*   </Text> */}
        {/* </View> */}
        <View>
          <View style={styles.avgViewS}>
            <FontIcon style={styles.iconViewS} name="shoe-prints" size={20} />
            <Text style={styles.badgeText}>Average steps:</Text>
          </View>
          <Text style={[styles.badgeText, styles.outcome]}>
            {workoutResult?.StepAmount}
          </Text>
        </View>
        <View>
          <View style={styles.avgViewS}>
            <FontIcon style={styles.iconViewS} name="running" size={20} />
            <Text style={styles.badgeText}>Favourite activity:</Text>
          </View>
          <Text style={[styles.badgeText, styles.outcome]}>
            {workoutResult?.Type}
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
