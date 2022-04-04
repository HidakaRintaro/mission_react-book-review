// https://redux.js.org/tutorials/typescript-quick-start#project-setup

import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from '~/store/auth'

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
