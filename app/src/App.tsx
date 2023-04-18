import { ThemeProvider } from '@ui5/webcomponents-react'
import { Provider } from 'react-redux'
import { store } from './redux/store'

import MoviesRoutes from './routes/MoviesRoutes'
export default function App() {
  return (
    <ThemeProvider>
      <Provider store={store}>
        <MoviesRoutes />
      </Provider>
    </ThemeProvider>
  )
}
