import { Button, Toolbar, ToolbarSpacer } from '@ui5/webcomponents-react'
import '@ui5/webcomponents-icons/dist/log'

import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { setLogin } from '../../redux/loginSlice'
import axios from 'axios'

const Header = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  // const [cookie, setCookie, removeCookie] = useCookies(['jwt'])
  const handleLogof = async () => {
    navigate('/')
  }

  const handleFavorite = () => {
    navigate('/favorites')
  }

  const handleHome = () => {
    navigate('/home')
  }

  return (
    <header
      className='header'
      style={{ maxWidth: '100%', backgroundColor: '#01b4e4' }}
    >
      <Toolbar
        design='Auto'
        numberOfAlwaysVisibleItems={3}
        style={{ backgroundColor: '#fff' }}
        // toolbarStyle='Clear'
      >
        <img
          src='https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg'
          alt=''
        />
        <ToolbarSpacer />

        <Button onClick={handleHome}>Home</Button>
        <Button onClick={handleFavorite}>Favorites</Button>
        <Button icon='log' onClick={handleLogof}></Button>
      </Toolbar>
    </header>
  )
}

export default Header
