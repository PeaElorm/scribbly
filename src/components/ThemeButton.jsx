import React, {useContext} from 'react'
import { ThemeContext } from '../context/ThemeContext'
import { Moon, Sun } from 'lucide-react'

const ThemeButton = () => {
    const {theme, toggleTheme} = useContext(ThemeContext)
  return (
    <button 
        className='border-2 p-1.5 rounded-2xl'
        style={{backgroundColor: theme.background, color:theme.text}}
        onClick={toggleTheme}
    >
        {theme.type === "light" ? <Moon height={15} width={15}/> : <Sun height={15} width={15}/>}
    </button>
  )
}

export default ThemeButton