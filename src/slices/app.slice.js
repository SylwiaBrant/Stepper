/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLoggedIn: false,
    user: {},
  },
  reducers: {
    logIn: (state, { payload }) => {
      state.isLoggedIn = payload.isLoggedIn
      state.user = payload.user
    },
    register: (state, { payload }) => {
      state.isLoggedIn = payload.isLoggedIn
      state.user = payload.user
    },
  },
})

// export const { action } = appSlice
export const { logIn, register } = authSlice.actions

export default authSlice.reducer
