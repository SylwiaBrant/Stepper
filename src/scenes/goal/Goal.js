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

const Goal = ({ route, navigation }) => {
  const [goal, setGoal] = useState("")
  console.log(route.params.user)
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
          Enter Your goal of steps
        </Heading>
        <VStack space={3} mt="5">
          <FormControl>
            <Input
              borderWidth={2}
              borderColor="#000000"
              backgroundColor="#ecffff"
              placeholder="e.g. 8000"
              onChangeText={newGoal => setGoal(newGoal)}
            />
          </FormControl>
          <Button
            mt="1"
            backgroundColor={colors.indigo}
            _text={{
              fontSize: 'sm',
            }}
            onPress={() => {
              route.params.user.goal = goal
              navigation.navigate('Date', {
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
}
Goal.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }),
}
Goal.defaultProps = {
  navigation: { navigate: () => null },
}

export default Goal
