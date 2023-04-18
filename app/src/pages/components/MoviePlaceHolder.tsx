import { Grid } from '@ui5/webcomponents-react'
import React from 'react'

const MoviePlaceHolder = () => {
  return (
    <Grid style={{ marginLeft: '15px', maxWidth: '88%', textAlign: 'center' }}>
      <div data-layout-span='XL12 L12 M12 S12'>find your favorite movies</div>
    </Grid>
  )
}

export default MoviePlaceHolder
