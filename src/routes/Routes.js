import React, { useEffect } from 'react'
import { Text } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { authenticate } from 'slices/app.slice'
import Main from './navigation'
import { NativeRouter, Route, Link } from "react-router-native";
import Home from 'scenes/home'
import Profile from 'scenes/profile'
import Details from 'scenes/details'
import Counter from 'scenes/counter'
import Login from 'scenes/login'

const Routes = () => {
  const { isLoggedIn } = useSelector((state) => state.auth)
  const dispatch = useDispatch()

//  useEffect(() => {
//    dispatch(login())
//  }, [dispatch])

  // TODO: switch router by loggedIn state
  //console.log('[##] loggedIn', loggedIn)

  // rendering
  //if (!checked) return <Text>Loading...</Text>
//  return  (
//             <Routes>
//               <Route exact path="/" path="/home" component={Home} />
//               <Route path="/login" component={Login} />
//               <Route path="/counter" component={Counter} />
//               <Route path="/profile" component={Profile} />
//             </Routes>
//
//           )
  return <Main />
}

export default Routes
