import { NotebookPen, Plus } from 'lucide-react'
import React from 'react'

const Aside = () => {
  return (
    <div className='basis-1/12 border-r-2 border-r-gray-200 flex flex-col items-center py-8 gap-20'>
        <div className='font-bold flex'>
            <p>Scribbly</p>
             <NotebookPen color='green' height={20}/>
        </div>
        <div className='bg-black text-white p-2 rounded-full'>
            <Plus/>
        </div>
    </div>
  )
}

export default Aside