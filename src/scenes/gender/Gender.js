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

const Gender = ({ navigation }) => (
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
        Enter Your gender
      </Heading>
      <VStack space={3} mt="5">
        <FormControl>
          <Input
            borderWidth={2}
            borderColor="#000000"
            backgroundColor="#ecffff"
            placeholder="e.g. Male"
            onChange={handleChange}
          />
        </FormControl>
        <Button
          mt="1"
          colorScheme="indigo"
          onPress={() => {
            navigation.navigate('Home')
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
Gender.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }),
}
Gender.defaultProps = {
  navigation: { navigate: () => null },
}

export default Gender
