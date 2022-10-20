import React from 'react'
import { Link, Nav } from './styles'
import { MdHome, MdFavoriteBorder, MdPersonOutline } from 'react-icons/md'

const SIZE = '32px'

export const NavBar = () => {
  return (
    <Nav>
      <Link to='/' end><MdHome size={SIZE} /></Link>
      <Link to='/favs' end><MdFavoriteBorder size={SIZE} /></Link>
      <Link to='/user' end><MdPersonOutline size={SIZE} /></Link>
    </Nav>
  )
}
