import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from './store'

// Define a type for the slice state
// alterar depois de fazer o back-end
export interface MovieState {
  actors: string
  title: string
  plot: string
  poster: string
  imdbRating: string
}

// Define the initial state using that type
const initialState: MovieState = {
  actors: 'Pedro Pascal, Bella Ramsey, Anna Torv',
  title: '',
  plot: "After a global pandemic destroys civilization, a hardened survivor takes charge of a 14-year-old girl who may be humanity's last hope.",
  poster:
    'https://m.media-amazon.com/images/M/MV5BZGUzYTI3M2EtZmM0Yy00NGUyLWI4ODEtN2Q3ZGJlYzhhZjU3XkEyXkFqcGdeQXVyNTM0OTY1OQ@@._V1_SX300.jpg',
  imdbRating: '9.1',
}

export const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    handleMovie: (state, action: PayloadAction<MovieState>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.actors = action.payload.actors
      state.title = action.payload.title
      state.poster = action.payload.poster
      state.plot = action.payload.plot
      state.imdbRating = action.payload.imdbRating
    },
  },
})

export const { handleMovie } = movieSlice.actions

export const selectMovie = (state: RootState) => state

export default movieSlice.reducer
