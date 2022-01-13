import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, View } from 'react-native'
import {
  Box,
  Heading,
  VStack,
  FormControl,
  Input,
  Button,
  useToast,
} from 'native-base'
import { colors } from 'theme'
import ClientRequest from '../../routes/ClientRequest'

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.lightGrayPurple,
  },
})

const Registration = ({ navigation }) => {
  const [name, setName] = useState(undefined)
  const [lastName, setLastName] = useState(undefined)
  const [email, setEmail] = useState(undefined)
  const [login, setLogin] = useState(undefined)
  const [password, setPassword] = useState(undefined)
  const toast = useToast()

  return (
    <View style={styles.root}>
      <Box>
        <Heading>Registration</Heading>
        <Heading>create new Account</Heading>
        <VStack>
          <FormControl>
            <FormControl.Label>Name</FormControl.Label>
            <Input
              type="text"
              onChange={(event) => {
                setName(event.target.value)
              }}
            />
          </FormControl>
          <FormControl>
            <FormControl.Label>Last Name</FormControl.Label>
            <Input
              type="text"
              onChange={(event) => {
                setLastName(event.target.value)
              }}
            />
          </FormControl>
          <FormControl>
            <FormControl.Label>Email</FormControl.Label>
            <Input
              type="text"
              onChange={(event) => {
                setEmail(event.target.value)
              }}
            />
          </FormControl>
          <FormControl>
            <FormControl.Label>Login</FormControl.Label>
            <Input
              type="text"
              onChange={(event) => {
                setLogin(event.target.value)
              }}
            />
          </FormControl>
          <FormControl>
            <FormControl.Label>Password</FormControl.Label>
            <Input
              type="password"
              onChange={(event) => {
                setPassword(event.target.value)
              }}
            />
          </FormControl>
          <Button
            mt="2"
            onPress={async () => {
              const client = {
                Name: name,
                LastName: lastName,
                Email: email,
                Login: login,
                Password: password,
              }

              const response = await ClientRequest.addNewClient(client)
              if (
                Array.isArray(response)
                && response.length === 1
                && Number.isInteger(response[0])
              ) {
                navigation.navigate('Home', { from: 'Registration' })
              } else {
                toast.show({
                  placement: 'top',
                  title: 'Something went Wrong',
                  description: response,
                  status: 'alert',
                })
              }
            }}
          >
            Register
          </Button>
        </VStack>
      </Box>
    </View>
  )
}

Registration.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }),
}

Registration.defaultProps = {
  navigation: { navigate: () => null },
}

export default Registration
