import {
  Bar,
  Button,
  Card,
  CardHeader,
  FlexBox,
  Modals,
} from '@ui5/webcomponents-react'
import '@ui5/webcomponents-icons/dist/delete'
import '@ui5/webcomponents-icons/dist/show'

import { Text } from '@ui5/webcomponents-react'
import axios from 'axios'

const FavoriteCard = (props: {
  title: string
  poster: string
  actors: string
  plot: string
  id: number
  reload: Function
}) => {
  const { title, poster, actors, plot, id, reload } = props

  const showDialog = Modals.useShowDialog()

  const modal = () => {
    const { close } = showDialog({
      headerText: `${title}`,
      children: <img src={poster} alt='' />,
      footer: (
        <Bar endContent={<Button onClick={() => close()}>Close</Button>} />
      ),
    })
  }

  const handleDelete = async (id: Number) => {
    await axios
      .delete(
        `https://512b3f14trial-dev-my-app-backend.cfapps.us10-001.hana.ondemand.com/remove/${id}`,
        {
          withCredentials: true,
        }
      )
      .then((response) => {
        console.log(response)
        reload()
      })
  }

  return (
    <Card
      accessibleName=''
      header={
        <CardHeader
          avatar={<img src={`${poster}`} alt='' />}
          titleText={`${title}`}
          subtitleText={`Actors: ${actors}`}
        />
      }
      style={{
        width: '100%',
      }}
    >
      <FlexBox
        justifyContent='Start'
        direction='Column'
        style={{ textAlign: 'justify' }}
      >
        <div style={{ padding: '5px 15px', height: '100px' }}>
          <Text>{plot}</Text>
        </div>
        <FlexBox justifyContent='End'>
          <Button
            icon='show'
            style={{ margin: '0 px', border: '0px' }}
            onClick={modal}
          ></Button>
          <Button
            accessibleName='remove movie from favorites'
            icon='delete'
            onClick={() => handleDelete(id)}
            style={{ marginRight: '15px', border: '0px', color: 'red' }}
          ></Button>
        </FlexBox>
      </FlexBox>
    </Card>
  )
}

export default FavoriteCard
