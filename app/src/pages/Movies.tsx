import { FlexBox } from '@ui5/webcomponents-react'
import './styles.css'

import SearchBar from './components/SearchBar'
import MainContent from './components/MainContent'
import Header from './components/Header'
import Footer from './components/Footer'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useAppSelector } from '../redux/hooks'
import MoviePlaceHolder from './components/MoviePlaceHolder'

const Movies = () => {
  const movie = useAppSelector((state) => state.movie)

  const matches = useMediaQuery('(min-width:1300px)')
  return (
    <FlexBox
      alignItems='Center'
      direction='Column'
      justifyContent='Start'
      style={{
        width: matches ? '70vw' : '100%',
        margin: '0 auto',
        minHeight: '100vh',
        backgroundColor: '#fff',
      }}
    >
      <Header />
      <SearchBar />
      {movie.title.length === 0 ? <MoviePlaceHolder /> : <MainContent />}

      <Footer />
    </FlexBox>
  )
}

export default Movies
