import React, { useState, useEffect } from 'react'
import { View } from 'react-native'
import { Provider } from 'react-redux'
import store from 'utils/store'
import 'utils/ignore'
import { NativeBaseProvider } from 'native-base'

// assets
import { imageAssets } from 'theme/images'
import { fontAssets } from 'theme/fonts'
import { NavigationContainer } from '@react-navigation/native'
import AppStackNavigator from './routes/navigation/stacks'

const App = () => {
  const [didLoad, setDidLoad] = useState(false)

  // handler
  const handleLoadAssets = async () => {
    // assets preloading
    await Promise.all([...imageAssets, ...fontAssets])
    setDidLoad(true)
  }

  // lifecycle
  useEffect(() => {
    handleLoadAssets()
  }, [])

  // rendering
  if (!didLoad) return <View />
  return (
    <NativeBaseProvider>
      <Provider store={store}>
        <NavigationContainer>
          <AppStackNavigator />
        </NavigationContainer>
      </Provider>
    </NativeBaseProvider>
  )
}

export default App
