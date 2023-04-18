import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useAppSelector } from '../redux/hooks'

const PrivateRoute = () => {
  const isLogged = true

  return isLogged ? <Outlet /> : <Navigate to='/' />
}

export default PrivateRoute
