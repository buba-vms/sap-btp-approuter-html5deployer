import { configureStore } from '@reduxjs/toolkit'
import searchReducer from './searchSlice'
import movieReducer from './movieSlice'
import loginReducer from './loginSlice'

export const store = configureStore({
  reducer: {
    search: searchReducer,
    movie: movieReducer,
    login: loginReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
