import React, { useState } from 'react'
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

const Date = ({ route, navigation }) => {
  const [date, setDate] = useState("")
  console.log(route.params.user)
  return (
  <View style={styles.root}>
    <Box safeArea p="2" py="8" w="90%" maxW="290">
      <Heading
        size="lg"
        fontWeight="bold"
        backgroundColor={colors.indigo}
      >
        Enter Your date of birth
      </Heading>
      <VStack space={3} mt="5">
        <FormControl>
          <Input
            borderWidth={2}
            borderColor="#000000"
            backgroundColor="#ecffff"
            placeholder="e.g. 1998-01-01"
            onChangeText={newDate => setDate(newDate)}
          />
        </FormControl>
        <Button
          mt="1"
          backgroundColor={colors.indigo}
          _text={{
            fontSize: 'sm',
          }}
          onPress={() => {
            route.params.user.date = date
            navigation.navigate('Gender', {
              user: route.params.user,
            })
          }}
        >
          Next
        </Button>
      </VStack>
    </Box>
  </View>
)
Date.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }),
}
Date.defaultProps = {
  navigation: { navigate: () => null },
}

export default Date
