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

const Height = ({ route, navigation }) => {
  const [height, setHeight] = useState("")
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
          Enter Your height
        </Heading>
        <VStack space={3} mt="5">
          <FormControl>
            <Input
              borderWidth={2}
              borderColor="#000000"
              backgroundColor="#ecffff"
              placeholder="e.g. 170"
              onChangeText={newHeight => setHeight(newHeight)}
            />
          </FormControl>
          <Button
            mt="1"
            backgroundColor={colors.indigo}
            _text={{
              fontSize: 'sm',
            }}
            onPress={() => {
              route.params.user.height = height
              navigation.navigate('Weight', {
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

Height.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }),
}

Height.defaultProps = {
  navigation: { navigate: () => null },
}

export default Height
