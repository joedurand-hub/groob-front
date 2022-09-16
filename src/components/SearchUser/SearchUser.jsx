import React from 'react'
import Input from '../Input/Input'
import styles from "./searchUser.module.css"

const SearchUser = ({onSubmit, onChange}) => {
  return (
        <Input type="text" onChange={onChange} variant="search" placeholder="Buscá por nombre, descripción..."/>
  )
}

export default SearchUser