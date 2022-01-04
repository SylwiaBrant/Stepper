import React, { useState, useEffect } from 'react'
import { View } from 'react-native'
import { Provider } from 'react-redux'
import store from 'utils/store'
import 'utils/ignore'
import { NativeBaseProvider } from 'native-base'

// assets
import { imageAssets } from 'theme/images'
import { fontAssets } from 'theme/fonts'
import Router from './routes'
import ClientRequest from './routes/ClientRequest'
import WorkoutResultsRequest from './routes/WorkoutResultsRequest'

const App = () => {
  // state
  // require('dotenv').config();
  // console.log('App');
  // ClientRequest.LoginClient('2', '2');
  ClientRequest.GetClientById(2)
  // ClientRequest.AddNewClient({
  //   Login: 'Damian', // string
  //   Password: 'Damian', // string
  //   Height: 80.10, // double
  //   Width: 178.10, // double
  //   Goal: 10000, // int
  //   Birthday: '1999-01-01', // date
  //   Gender: 'Men', // string
  // });

  // ClientRequest.UpdateClient({
  //   Id: 1,
  //   Login: 'Test', // string
  //   Password: 'Test', // string
  //   Height: 180.10, // double
  //   Width: 1178.10, // double
  //   Goal: 110000, // int
  //   Birthday: '2099-01-01', // date
  //   Gender: 'Men', // string
  // });

  WorkoutResultsRequest.GetWorkoutResults(2)
  // WorkoutResultsRequest.CreateWorkoutResult({
  //   Type: "Walk",
  //   StepAmmount: 210000,
  //   StartDate: "2022-01-02 22:22:00",
  //   EndDate: "2022-01-02 23:22:00",
  //   ClientId: 2
  // });
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
