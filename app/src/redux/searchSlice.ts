import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from './store'

// Define a type for the slice state
interface SearchState {
  searchInput: string
}

// Define the initial state using that type
const initialState: SearchState = {
  searchInput: '',
}

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    handleSearch: (state, action: PayloadAction<string>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.searchInput = action.payload
    },
  },
})

export const { handleSearch } = searchSlice.actions

export const selectSearch = (state: RootState) => state.search.searchInput

export default searchSlice.reducer
