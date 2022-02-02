import React, { useState, useEffect } from 'react'
import { View } from 'react-native'
import { Provider } from 'react-redux'
import store from 'utils/store'
import 'utils/ignore'
import { NativeBaseProvider } from 'native-base'
import RootStackScreen from "./routes/navigation";

// assets
import { imageAssets } from 'theme/images'
import { fontAssets } from 'theme/fonts'


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
        <RootStackScreen />
      </Provider>
    </NativeBaseProvider>
  )
}

export default App
