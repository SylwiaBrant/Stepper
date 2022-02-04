import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, View } from 'react-native'
import {
  Box, Button, FormControl, Heading, Input, VStack,
} from 'native-base'
import { colors } from '../../theme'

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

const handleChange = () => {}

const handleSubmit = () => {}

const Forgot = () => (
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
        Remind your password
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
        Enter the email address used to register your account.
      </Heading>
      <VStack space={3} mt="5">
        <FormControl>
          <FormControl.Label>Email:</FormControl.Label>
          <Input
            borderWidth={2}
            borderColor="#000000"
            backgroundColor="#ecffff"
            placeholder="e.g. Please enter Your email used to registration"
            onChange={handleChange}
          />
        </FormControl>
        <Button
          mt="1"
          backgroundColor={colors.indigo}
          onSubmit={handleSubmit}
          _text={{
            fontSize: 'sm',
          }}
        >
          Send email
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
Forgot.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }),
}
Forgot.defaultProps = {
  navigation: { navigate: () => null },
}

export default Forgot
