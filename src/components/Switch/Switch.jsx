import React, { useContext } from 'react'
import { ThemeContext } from '../../contexts/ThemeContext'


const Switch = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)
  const handleClick = () => {
    toggleTheme()
  }

  return (
    <div>
      <button type="text" name={theme} value={theme} onClick={handleClick}>Dark mode</button>
    </div>
  )
}

export default Switch