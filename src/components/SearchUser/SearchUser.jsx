import React from 'react'
import Input from '../Input/Input'
import styles from "./searchUser.module.css"

const SearchUser = () => {
  return (
    <div className={styles.container_search}>
        <Input type="search" variant="search" placeholder="Buscá por nombre, descripción..."/>
    </div>
  )
}

export default SearchUser