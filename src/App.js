import React, { useState, useEffect } from 'react'
import { View } from 'react-native'
import { Provider } from 'react-redux'
import store from 'utils/store'
import 'utils/ignore'
import { NativeBaseProvider } from 'native-base'
//import { NativeRouter, Switch, Route, Router } from "react-router-native";
import Home from 'scenes/home'
import Profile from 'scenes/profile'
import Details from 'scenes/details'
import Counter from 'scenes/counter'
import Login from 'scenes/login'
import Router from './routes'

// assets
import { imageAssets } from 'theme/images'
import { fontAssets } from 'theme/fonts'
//import {Router} from './routes'

const App = () => {
  // state
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
        <Router />
      </Provider>
    </NativeBaseProvider>
  )
}

export default App
