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
import { colors } from 'theme'
import ClientRequest from '../../routes/ClientRequest'

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.lightcyan,
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
      <Box safeArea p="2" py="8" w="90%" maxW="290">
        <Heading
          size="lg"
          fontWeight="bold"
          color="coolGray.800"
          _dark={{
            color: 'warmGray.50',
          }}
        >
          Create new Account
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
          Sign up to count Your steps!
        </Heading>
        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label>First Name:</FormControl.Label>
            <Input
              borderWidth={2}
              borderColor="#000000"
              backgroundColor="#ecffff"
              type="text"
              onChange={(event) => {
                setName(event.target.value)
              }}
            />
          </FormControl>
          <FormControl>
            <FormControl.Label>Last Name:</FormControl.Label>
            <Input
              marginTop={1}
              borderWidth={2}
              borderColor="#000000"
              backgroundColor="#ecffff"
              type="text"
              onChange={(event) => {
                setLastName(event.target.value)
              }}
            />
          </FormControl>
          <FormControl>
            <FormControl.Label>Email:</FormControl.Label>
            <Input
              marginTop={1}
              borderWidth={2}
              borderColor="#000000"
              backgroundColor="#ecffff"
              type="text"
              onChange={(event) => {
                setEmail(event.target.value)
              }}
            />
          </FormControl>
          <FormControl>
            <FormControl.Label>Login:</FormControl.Label>
            <Input
              marginTop={1}
              borderWidth={2}
              borderColor="#000000"
              backgroundColor="#ecffff"
              type="text"
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
          </FormControl>
          <Button
            mt="2"
            colorScheme="indigo"
            onPress={async () => {
              const client = {
                Name: name,
                LastName: lastName,
                Email: email,
                Login: login,
                Password: password,
              }
              navigation.navigate('Height')

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
                  title: 'Something went wrong',
                  description: response,
                  status: 'alert',
                })
              }
            }}
          >
            Sign up
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
