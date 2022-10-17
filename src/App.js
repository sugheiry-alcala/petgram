import React from 'react'
import { GlobalStyle } from './styles/GlobalStyles'
import { Logo } from './components/Logo'
import { Home } from './Pages/Home'
import { Detail } from './Pages/Detail'
import { NavBar } from './components/NavBar'
import { Route, Routes } from 'react-router-dom'
import { Favs } from './Pages/Favs'
import { User } from './Pages/User'
import { NotRegisteredUser } from './Pages/NotRegisteredUser'
import Context from './Context'

export const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Logo />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pet/:id' element={<Home />} />
        <Route path='/detail/:id' element={<Detail />} />
      </Routes>

      <Context.Consumer>
        {
          ({ isAuth }) =>
            isAuth
              ? <Routes>
                <Route path='/favs/' element={<Favs />} />
                <Route path='/user/' element={<User />} />
              </Routes>
              : <Routes>
                <Route path='/favs/' element={<NotRegisteredUser />} />
                <Route path='/user/' element={<NotRegisteredUser />} />
              </Routes>
        }
      </Context.Consumer>

      <NavBar />
    </div>
  )
}
