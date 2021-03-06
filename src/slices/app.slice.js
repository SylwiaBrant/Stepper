/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLoggedIn: false,
    user: {},
  },
  reducers: {
    loginUser: (state, { payload }) => {
      state.isLoggedIn = true
      state.user = payload
    },
    register: (state, { payload }) => {
      state.isLoggedIn = true
      state.user = payload
    },
  },
})

// export const { action } = appSlice
export const { loginUser, register } = authSlice.actions

export default authSlice.reducer
