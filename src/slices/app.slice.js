/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'
import {
  combineReducers,
} from '@reduxjs/toolkit'

const initialState = [
  {
    isLoggedIn: false,
    user: {},
  }
]

export function loginUser(user) {
  return {
    user,
  }
}

function authSlice(state=initialState, user) {
  return [
    {
      isLoggedIn: true,
      user: user,
    }
  ]
}

const reducer = combineReducers({
  authSlice
})

export default reducer
