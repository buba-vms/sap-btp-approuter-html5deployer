import { Button, Icon, Text } from '@ui5/webcomponents-react'
import { useEffect, useState } from 'react'
import { useAppSelector } from '../../redux/hooks'
import '@ui5/webcomponents-icons/dist/favorite.js'
import '@ui5/webcomponents-icons/dist/unfavorite.js'
import '@ui5/webcomponents-icons/dist/heart-2'
import '@ui5/webcomponents-icons/dist/heart'
import '@ui5/webcomponents/dist/features/InputElementsFormSupport.js'
import axios from 'axios'

const MainFooter = () => {
  const movie = useAppSelector((state) => state.movie)
  const { actors, imdbRating } = movie
  const [isFavorite, setIsFavorite] = useState(false)
  const [stars, setStars] = useState([
    'favorite',
    'favorite',
    'favorite',
    'favorite',
    'favorite',
  ])

  useEffect(() => {
    setIsFavorite(false)
  }, [movie])

  const handleFavorite = async () => {
    isFavorite ? setIsFavorite(false) : setIsFavorite(true)
    console.log(isFavorite)

    if (!isFavorite) {
      await axios
        .post(
          `https://512b3f14trial-dev-my-app-backend.cfapps.us10-001.hana.ondemand.com/new-favorite`,
          {
            movieDto: movie,
          },
          { withCredentials: true }
        )
        .then((response) => {
          console.log(response)
        })
    }
  }

  useEffect(() => {
    const nota = Math.round(Number(imdbRating) / 2)
    console.log(nota)

    switch (nota) {
      case 1:
        setStars([
          'favorite',
          'unfavorite',
          'unfavorite',
          'unfavorite',
          'unfavorite',
        ])
        break
      case 2:
        setStars([
          'favorite',
          'favorite',
          'unfavorite',
          'unfavorite',
          'unfavorite',
        ])
        break
      case 3:
        setStars([
          'favorite',
          'favorite',
          'favorite',
          'unfavorite',
          'unfavorite',
        ])
        break
      case 4:
        setStars(['favorite', 'favorite', 'favorite', 'favorite', 'unfavorite'])
        break
      case 5:
        setStars(['favorite', 'favorite', 'favorite', 'favorite', 'favorite'])
        break
      default:
        setStars(['favorite', 'favorite', 'favorite', 'favorite', 'favorite'])
    }
  }, [movie])

  return (
    <div style={{ margin: '20px 0' }}>
      <div>
        <Text className='bold'>Actor:</Text> {actors}
      </div>
      <p>
        <span
          className='bold'
          style={{ display: 'flex', alignItems: 'center' }}
        >
          Review:
          {stars.map((star, id) => (
            <Icon
              name={star}
              style={{ marginLeft: '1px' }}
              design={'Critical'}
              accessibleName={imdbRating}
              showTooltip={true}
              key={id}
            />
          ))}
        </span>{' '}
      </p>

      <Button
        className='btn'
        style={{ marginLeft: '0px', marginTop: '20px' }}
        onClick={handleFavorite}
      >
        <span style={{ display: 'flex', alignItems: 'center' }}>
          Favorite
          <Icon
            name={isFavorite ? 'heart' : 'heart-2'}
            style={{ marginLeft: '3px' }}
            design={'Negative'}
          />
        </span>
      </Button>
    </div>
  )
}

export default MainFooter
