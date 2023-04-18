import { Button, FlexBox, Input } from '@ui5/webcomponents-react'
import axios, { AxiosError } from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../redux/hooks'
import { setLogin } from '../redux/loginSlice'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const handleLogin = async () => {
    navigate('/home')
  }

  const handleRegister = async () => {}
  return (
    <FlexBox
      justifyContent={'Center'}
      alignItems={'Center'}
      direction={'Column'}
      style={{ minHeight: '100vh', background: '#01b4e4', textAlign: 'center' }}
    >
      <div
        style={{
          background: 'white',
          width: '330px',
          borderRadius: '5px',
        }}
      >
        <img
          src='https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg'
          alt=''
          style={{ width: '140px', margin: '0 auto', padding: '10px 0 5px 0' }}
        />
        <form style={{ padding: '10px' }}>
          <Input
            type='Email'
            name='username'
            value={username || ''}
            onInput={(e) => {
              setUsername(`${e.target.value}`)
            }}
            placeholder='example@email.com'
            style={{ margin: '5px auto' }}
          />

          <Input
            type='Password'
            name='password'
            value={password || ''}
            onInput={(e) => {
              setPassword(`${e.target.value}`)
            }}
            placeholder='password'
            style={{ margin: '5px auto' }}
          />

          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Button onClick={handleLogin} style={{ margin: '5px' }}>
              Login
            </Button>
            <Button style={{ margin: '5px' }} onClick={handleRegister}>
              Register
            </Button>
          </div>
        </form>
      </div>
    </FlexBox>
  )
}

export default Login
