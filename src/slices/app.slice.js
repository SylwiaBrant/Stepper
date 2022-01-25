/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLoggedIn: false,
    userId: 0,
  },
  reducers: {
    logIn: (state, { payload }) => {
      state.isLoggedIn = payload.isLoggedIn
      state.userId = payload.userId
    },
    register: (state, { payload }) => {
      state.isLoggedIn = payload.isLoggedIn
      state.userId = payload.userId
    },
  },
})

// export const { action } = appSlice
export const { logIn, register } = authSlice.actions

export default authSlice.reducer
