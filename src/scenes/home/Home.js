import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import {
  StyleSheet, Text, View, StatusBar,
} from 'react-native'
import Button from 'components/Button'
import { colors } from 'theme'
import { useSelector, useDispatch } from 'react-redux';
//import { Redirect } from 'react-router-dom';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.lightGrayPurple,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
})

const Home = ({ navigation }) => {
  const { isLoggedIn } = useSelector(state => state.auth);
  if (!isLoggedIn) {
    //history.push("/counter");
    console.log("Navigating to Login from Home. is logged in state: " + isLoggedIn);
    <Redirect to="/login" />
  }

  return (
    <View style={styles.root}>
      <StatusBar barStyle="light-content" />
      <Text style={styles.title}>Home</Text>
      <Button
        title="Go to Details"
        color="white"
        backgroundColor={colors.lightPurple}
        onPress={() => {
          navigation.navigate('Details', { from: 'Home' })
        }}
      />
    </View>
  )
}

Home.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }),
}

Home.defaultProps = {
  navigation: { navigate: () => null },
}

export default Home
