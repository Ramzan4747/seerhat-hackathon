import React, { useContext } from 'react'
import { Routes, Route, Navigate, BrowserRouter } from 'react-router-dom'
import Frontend from './Frontend'
import Auth from './Auth'
import { AuthContext } from '../context/AuthContext'
export default function Index() {

  const { isAuthenticated } = useContext(AuthContext)

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/*' element={<Frontend />} />
        <Route path='/auth/*' element={isAuthenticated ? <Navigate to="/" /> : <Auth />} />
      </Routes>
    </BrowserRouter>

    </>
  )
}
