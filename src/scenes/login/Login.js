import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, View } from 'react-native'
import { colors } from 'theme'
import {
  Box,
  Text,
  Heading,
  VStack,
  FormControl,
  Input,
  Button,
  HStack,
} from 'native-base'
import { useSelector } from 'react-redux'

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

const Login = ({ navigation }) => {
  const { isLoggedIn } = useSelector((state) => state.auth)

  useEffect(() => {
    if (isLoggedIn) {
      console.log(
        `Navigating to Login from Profile. is logged in state: ${isLoggedIn}`,
      )
      navigation.navigate('Home', { from: 'Login' })
    }
  }, [isLoggedIn])

  const handleChange = () => {}

  const handleLogin = () => {
    console.log('trying to log in')
  }
  return (
    <View style={styles.root}>
      <Box safeArea p="2" py="8" w="90%" maxW="290">
        <Heading
          size="lg"
          fontWeight="600"
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
            <FormControl.Label>Email ID</FormControl.Label>
            <Input onChange={handleChange} />
          </FormControl>
          <FormControl>
            <FormControl.Label>Password</FormControl.Label>
            <Input type="password" onChange={handleChange} />
            <Button
              _text={{
                fontSize: 'xs',
                fontWeight: '500',
                color: 'indigo.500',
              }}
              alignSelf="flex-end"
              mt="1"
            >
              Forget Password?
            </Button>
          </FormControl>
          <Button mt="2" colorScheme="indigo" onSubmit={handleLogin}>
            Sign in
          </Button>
          <HStack mt="6" justifyContent="center">
            <Text
              fontSize="sm"
              color="coolGray.600"
              _dark={{
                color: 'warmGray.200',
              }}
            >
              Im a new user.
            </Text>
            <Button
              _text={{
                color: 'indigo.500',
                fontWeight: 'medium',
                fontSize: 'sm',
              }}
            >
              Sign Up
            </Button>
          </HStack>
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
