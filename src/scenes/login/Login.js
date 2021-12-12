import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import {
  StyleSheet, View, StatusBar,
} from 'react-native'
import { colors } from 'theme'
import {
  Box,
  Text,
  Heading,
  VStack,
  FormControl,
  Input,
  Link,
  Button,
  HStack,
  Center,
  NativeBaseProvider,
} from "native-base"
import { useSelector, useDispatch } from 'react-redux';
import { loginUser, appReducer } from 'slices/app.slice'

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.lightGrayPurple,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
})

const Login = ({ navigation }) => {
  const [loading, setLoading] = useState(false);
  const { isLoggedIn } = useSelector((state) => state.auth);

  //const history = useHistory();

  useEffect(() => {
    if (!isLoggedIn) {
      //history.push("/counter");
      console.log("not logged in");
    }
  }, [isLoggedIn]);

  const handleChange = () => {}

  const handleLogin = () => {
  console.log("trying to log in");

//    setLoading(true);
//
//    dispatch(login({ username, password }))
//      .unwrap()
//      .then(() => {
//        props.history.push("/profile");
//        window.location.reload();
//      })
//      .catch(() => {
//        setLoading(false);
//      });
  }
  return (
    <View style={styles.root}>
      <Box safeArea p="2" py="8" w="90%" maxW="290">
        <Heading
          size="lg"
          fontWeight="600"
          color="coolGray.800"
          _dark={{
            color: "warmGray.50",
          }}
        >
          Welcome
        </Heading>
        <Heading
          mt="1"
          _dark={{
            color: "warmGray.200",
          }}
          color="coolGray.600"
          fontWeight="medium"
          size="xs"
        >
          Sign in to continue!
        </Heading>

        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label>Email ID</FormControl.Label>
            <Input onChange={handleChange} />
          </FormControl>
          <FormControl>
            <FormControl.Label>Password</FormControl.Label>
            <Input type="password" onChange={handleChange} />
            <Link
              _text={{
                fontSize: "xs",
                fontWeight: "500",
                color: "indigo.500",
              }}
              alignSelf="flex-end"
              mt="1"
            >
              Forget Password?
            </Link>
          </FormControl>
          <Button mt="2" colorScheme="indigo" onSubmit={handleLogin}>
            Sign in
          </Button>
          <HStack mt="6" justifyContent="center">
            <Text
              fontSize="sm"
              color="coolGray.600"
              _dark={{
                color: "warmGray.200",
              }}
            >
              I'm a new user.{" "}
            </Text>
            <Link
              _text={{
                color: "indigo.500",
                fontWeight: "medium",
                fontSize: "sm",
              }}
              href="#"
            >
              Sign Up
            </Link>
          </HStack>
          {/* {(props.error || error) && (
            <Alert severity="error" onClick={() => setError(null)}>
              {props.error || error}
            </Alert>
          )} */}
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
