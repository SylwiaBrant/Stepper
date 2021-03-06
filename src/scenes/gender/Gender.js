import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, View } from 'react-native'
import {
  Box, Button, FormControl, Heading, Input, useToast, VStack,
} from 'native-base'
import { colors } from '../../theme'
import { useDispatch } from 'react-redux'
import { loginUser } from '../../slices/app.slice'
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

const Gender = ({ route, navigation }) => {
  const [gender, setGender] = useState("")
  const dispatch = useDispatch()
  const toast = useToast()
  return (
    <View style={styles.root}>
      <Box safeArea p="2" py="8" w="90%" maxW="290">
        <Heading
          size="lg"
          fontWeight="bold"
          color={colors.indigo}
        >
          Enter Your gender
        </Heading>
        <VStack space={3} mt="5">
          <FormControl>
            <Input
              borderWidth={2}
              borderColor="#000000"
              backgroundColor="#ecffff"
              placeholder="e.g. Male"
              onChangeText={newGender => setGender(newGender)}
            />
          </FormControl>
          <Button
            mt="1"
            backgroundColor={colors.indigo}
            onPress={async () => {
              route.params.user.Gender = gender
              const response = await ClientRequest.addNewClient(route.params.user)
              if (response.statusCode === 200) {
                const loginRequest = await ClientRequest.getClientById(response.response)
                dispatch(loginUser(loginRequest?.response[0]))
              } else{
                toast.show({
                  title: 'Error',
                  status: 'alert',
                  description: 'Encountered error, while saving result',
                })
              }
            }}
            _text={{
              fontSize: 'sm',
            }}
          >
            Next
          </Button>
        </VStack>
      </Box>
    </View>
  )
}
Gender.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }),
}
Gender.defaultProps = {
  navigation: { navigate: () => null },
}

export default Gender
