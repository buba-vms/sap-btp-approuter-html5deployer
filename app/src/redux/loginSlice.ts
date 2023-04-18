import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from './store'

// Define the initial state using that type
export interface LoginState {
  isLogged: boolean
}

const initialState: LoginState = {
  isLogged: false,
}

if (localStorage.getItem('logged')) {
  let logged = localStorage.getItem('logged')
  if (logged === 'true') {
    initialState.isLogged = true
  }
}

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setLogin: (state, action: PayloadAction<boolean>) => {
      state.isLogged = action.payload
      localStorage.setItem('logged', `${action.payload}`)
    },
  },
})

export const { setLogin } = loginSlice.actions

export const selectLogin = (state: RootState) => state

export default loginSlice.reducer
