import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, View } from 'react-native'
import {
  Box,
  Button,
  FormControl,
  Heading,
  Input,
  useToast,
  VStack,
} from 'native-base'
import { colors } from '../../theme'
import ClientRequest from '../../routes/ClientRequest'

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
  const toast = useToast()

  const handleChange = () => {}

  const handleLogin = () => {
    console.log('Logging...')
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
              console.log(response)
              if (
                Array.isArray(response)
                && response.length === 1
                && Number.isInteger(response[0])
              ) {
                navigation.navigate('Home')
              } else {
                toast.show({
                  placement: 'top',
                  title: 'Something went wrong',
                  description: response,
                  status: 'alert',
                })
              }
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
