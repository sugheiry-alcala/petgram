import React, { useContext } from 'react'
import { GlobalStyle } from './styles/GlobalStyles'
import { Logo } from './components/Logo'
import { Home } from './Pages/Home'
import { Detail } from './Pages/Detail'
import { NavBar } from './components/NavBar'
import { Route, Routes, Navigate } from 'react-router-dom'
import { Favs } from './Pages/Favs'
import { User } from './Pages/User'
import { NotRegisteredUser } from './Pages/NotRegisteredUser'
import { Context } from './Context'
import { NotFound } from './pages/NotFound'

export const App = () => {
  const { isAuth } = useContext(Context)
  return (
    <>
      <GlobalStyle />
      <Logo />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/pet/:id' element={<Home />} />
        <Route exact path='/detail/:id' element={<Detail />} />
        <Route exact path='/favs' element={isAuth ? <Favs /> : <Navigate replace to='/login' />} />
        <Route exact path='/user' element={isAuth ? <User /> : <Navigate replace to='/login' />} />
        <Route exact path='/login' element={!isAuth ? <NotRegisteredUser /> : <Navigate replace to='/' />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <NavBar />
    </>
  )
}
