import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Favorites from '../pages/Favorites'
import Login from '../pages/Login'
import Movies from '../pages/Movies'
import PrivateRoute from './PrivateRoute'

const MoviesRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='*' element={<Navigate replace to='/' />} />
        <Route path={'/'} element={<Login />} />
        <Route element={<PrivateRoute />}>
          <Route path='/home' element={<Movies />} />
          <Route path='/submit/*' element={<Movies />} />
          <Route path='/favorites' element={<Favorites />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default MoviesRoutes
