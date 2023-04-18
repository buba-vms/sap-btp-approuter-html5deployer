import { FlexBox, Grid } from '@ui5/webcomponents-react'
import './styles.css'

import Header from './components/Header'
import Footer from './components/Footer'
import FavoriteCard from './components/FavoriteCard'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useMediaQuery } from '@mui/material'

interface MovieCard {
  id: number
  actors: string
  plot: string
  imdbRating: string
  poster: string
  title: string
}

const Favorites = () => {
  const [favMovies, setFavMovies] = useState<MovieCard[]>([])
  const matches = useMediaQuery('(min-width:1300px)')

  const getMovies = async () => {
    try {
      await axios
        .get(
          `https://512b3f14trial-dev-my-app-backend.cfapps.us10-001.hana.ondemand.com/favorites`,
          { withCredentials: true }
        )
        .then((response) => {
          console.log(response.data)

          setFavMovies(response.data)
        })
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getMovies()
  }, [])

  return (
    <FlexBox
      alignItems='Start'
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

      <Grid style={{ margin: '10px 0', width: '100%', padding: '5px 10px' }}>
        {favMovies.map((favMovie) => (
          <div
            data-layout-span='XL4 L6 M6 S12'
            style={{ textAlign: 'justify' }}
            key={favMovie.id}
          >
            {
              <FavoriteCard
                actors={favMovie.actors}
                title={favMovie.title}
                plot={favMovie.plot}
                poster={favMovie.poster}
                id={favMovie.id}
                reload={getMovies}
              />
            }
          </div>
        ))}
      </Grid>

      <Footer />
    </FlexBox>
  )
}

export default Favorites
