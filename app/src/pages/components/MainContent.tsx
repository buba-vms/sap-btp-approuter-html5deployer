import { Grid, Title, Text } from '@ui5/webcomponents-react'
import { useAppSelector } from '../../redux/hooks'
import MainFooter from './MainFooter'

const MainContent = () => {
  const movie = useAppSelector((state) => state.movie)

  const { title, plot, poster } = movie
  return (
    <Grid style={{ marginLeft: '15px', maxWidth: '88%' }}>
      <div data-layout-span='XL8 L8 M12 S12' style={{ textAlign: 'justify' }}>
        <Title level='H1'>{title}</Title>
        <Text style={{ marginTop: '10px', paddingRight: '10px' }}>{plot}</Text>
        <MainFooter />
      </div>
      <div data-layout-span='XL4 L4 M12 S12' style={{ paddingBottom: '20px' }}>
        <img alt={`${title} poster`} src={poster} />
      </div>
    </Grid>
  )
}

export default MainContent
