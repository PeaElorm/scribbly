import React from 'react'
import ThemeButton from './ThemeButton'

const Top = () => {
  return (
    <div className='basis-10/12 px-20 py-10 flex w-full items-center gap-1'>
        <div className=''>
        <input placeholder='Search...' className=' border-2 rounded-2xl border-gray-100 p-2'/>
        </div>
        <div>
            <ThemeButton/>
        </div>
    </div>
  )
}

export default Top