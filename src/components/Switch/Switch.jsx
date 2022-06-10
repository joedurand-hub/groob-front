import React from 'react'
import { Label } from './styles'

const Switch = ({theme, toggleTheme}) => {
  console.log("theme:", theme)
  return (
    <div>
      <input type="radio" name='theme' value={theme} onClick={toggleTheme}/>
    </div>
  )
}

export default Switch