import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, View } from 'react-native'
import { colors } from 'theme'
import {
  Box, Heading, VStack, FormControl, Input, Button,
} from 'native-base'

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.lightcyan,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
})

const Login = ({ navigation }) => {
  // const { isLoggedIn } = useSelector((state) => state.auth)
  //
  // useEffect(() => {
  //   if (isLoggedIn) {
  //     console.log(
  //       `Navigating to Login from Profile - Is logged in state: ${isLoggedIn}`,
  //     )
  //     navigation.navigate('Home', { from: 'Login' })
  //   }
  // }, [isLoggedIn])

  const handleChange = () => {}

  const handleLogin = () => {
    console.log('Logging...')
    //auth.state.
  }
  return (
    <View style={styles.root}>
      <Box safeArea p="2" py="8" w="90%" maxW="290">
        <Heading
          size="lg"
          fontWeight="bold"
          color="coolGray.800"
          _dark={{
            color: 'warmGray.50',
          }}
        >
          Welcome
        </Heading>
        <Heading
          mt="1"
          _dark={{
            color: 'warmGray.200',
          }}
          color="coolGray.600"
          fontWeight="medium"
          size="xs"
        >
          Sign in to continue!
        </Heading>
        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label>Email:</FormControl.Label>
            <Input
              borderWidth={2}
              borderColor="#000000"
              backgroundColor="#ecffff"
              onChange={handleChange}
            />
          </FormControl>
          <FormControl>
            <FormControl.Label>Password:</FormControl.Label>
            <Input
              marginTop={1}
              borderWidth={2}
              borderColor="#000000"
              backgroundColor="#ecffff"
              type="password"
              onChange={handleChange}
            />
            <Button
              _text={{
                fontSize: 'xs',
                color: '#ffffff',
              }}
              colorScheme="blue"
              alignSelf="flex-end"
              mt="1"
            >
              Forgot password?
            </Button>
          </FormControl>
          <Button
            mt="1"
            colorScheme="indigo"
            onSubmit={handleLogin}
            _text={{
              fontSize: 'sm',
            }}
          >
            Sign in
          </Button>
          <Button
            mt="1"
            colorScheme="indigo"
            _text={{
              fontSize: 'sm',
            }}
            onPress={() => {
              navigation.navigate('Registration')
            }}
          >
            Sign up
          </Button>
          {/* {(props.error || error) && (
            <Alert severity="error" onClick={() => setError(null)}>
              {props.error || error}
            </Alert>
          )} */}
        </VStack>
      </Box>
    </View>
  )
}
Login.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }),
}
Login.defaultProps = {
  navigation: { navigate: () => null },
}
export default Login
