import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import Aside from './Aside'
import Top from './Top'

const Home = () => {
    const {theme, toggleTheme} = useContext(ThemeContext)
  return (
    <div
    className='m-20 rounded-3xl overflow-y-scroll overflow-x-hidden flex'
    style={{
        backgroundColor: theme.background,
        color: theme.text,
        height: "85vh"
      }}
    >
        <Aside/>
        <main>
            <Top/>
        </main>
    </div>
  )
}

export default Home