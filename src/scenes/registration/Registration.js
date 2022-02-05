import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, View } from 'react-native'
import {
  Box,
  Button,
  FormControl,
  Heading,
  Input,
  VStack,
} from 'native-base'
import { colors } from '../../theme'
import { useDispatch } from 'react-redux'

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
  const [name, setName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [login, setLogin] = useState("")
  const [password, setPassword] = useState("")
  const dispatch = useDispatch()

  return (
    <View style={styles.root}>
      <Box safeArea p="2" py="8" w="90%" maxW="290">
        <Heading
          size="lg"
          fontWeight="bold"
          color={colors.indigo}
        >
          Create new Account
        </Heading>
        <Heading
          mt="1"
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
              placeholder="e.g. John"
              onChangeText={newName => setName(newName)}
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
              placeholder="e.g. Doe"
              onChangeText={newLastName => setLastName(newLastName)}
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
              placeholder="e.g. email@example.com"
              onChangeText={newEmail => setEmail(newEmail)}
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
              placeholder="e.g. JohnD"
              onChangeText={newLogin => setLogin(newLogin)}
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
              placeholder="e.g. Please remember Your password"
              onChangeText={newPassword => setPassword(newPassword)}
            />
          </FormControl>
          <Button
            mt="2"
            backgroundColor={colors.indigo}
            onPress={() => {
              navigation.navigate('Height', {
                user: {
                  name: name,
                  lastName: lastName,
                  email: email,
                  login: login,
                  password: password,
                }
              })
            }}
          >
            Next
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
