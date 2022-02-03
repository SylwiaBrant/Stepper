import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, View } from 'react-native'
import {
  Box, Button, FormControl, Heading, Input, VStack,
} from 'native-base'
import { colors } from '../../theme'
import ClientRequest from '../../routes/ClientRequest'
import { loginUser } from '../../slices/app.slice'
import { useDispatch, useSelector } from 'react-redux'

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
  const [login, setLogin] = useState(undefined)
  const [password, setPassword] = useState(undefined)
  const dispatch = useDispatch()

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
              placeholder="e.g. Please enter Your email"
              onChange={(event) => {
                setLogin(event.target.value)
              }}
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
              placeholder="e.g. Please enter Your password"
              onChange={(event) => {
                setPassword(event.target.value)
              }}
            />
            <Button
              _text={{
                fontSize: 'xs',
                color: '#ffffff',
              }}
              colorScheme="blue"
              alignSelf="flex-end"
              mt="1"
              onPress={() => {
                navigation.navigate('Forgot')
              }}
            >
              Forgot password?
            </Button>
          </FormControl>
          <Button
            mt="1"
            colorScheme="indigo"
            _text={{
              fontSize: 'sm',
            }}
            onPress={async () => {
              const response = await ClientRequest.loginClient(login, password)
              dispatch(loginUser(response))
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
