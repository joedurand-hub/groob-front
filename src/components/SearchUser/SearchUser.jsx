import React from 'react'
import Input from '../Input/Input'
import styles from "./searchUser.module.css"

const SearchUser = ({onChange}) => {
  return (
        <Input type="text" onChange={onChange} variant="search" placeholder="Buscá por nombre de usuario, descripción, email..."/>
  )
}

export default SearchUser