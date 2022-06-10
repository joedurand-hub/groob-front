import React from 'react'
import { Nav } from './styles'
const NavBar = ({children}) => {

  return (
    <Nav>
        {children}
    </Nav>
  )
}

export default NavBar