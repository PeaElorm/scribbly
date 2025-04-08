import { NotebookPen, Plus } from 'lucide-react'
import React, { useState } from 'react'
import {motion} from "framer-motion"

const colors = ["#FDD97A", "#FE9A7A", "#B692F6", "#3EDBF0", "#E8F88C"];

const Aside = ({addNote}) => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='basis-1/12 border-r-2 border-r-gray-200 flex flex-col items-center py-8 gap-20'>
        <div className='font-bold flex'>
            <p>Scribbly</p>
             <NotebookPen color='green' height={20}/>
        </div>
        <div className=''>
        <button 
            onClick={() => setIsOpen(!isOpen)}
            className='bg-black text-white p-2 rounded-full shadow-lg'>
            <Plus/>
        </button>

        {/* Animated color buttons */}
        <div className='relative flex flex-col items-center gap-5'>
            {colors.map((color, index) => (
                <motion.button
                key={color}
                onClick={() => addNote(color)}
                className='w-4 h-4 rounded-full shadow-md'
                style={{backgroundColor: color}}
                initial={{opacity:0, y:10}}
                animate={{
                    opacity: isOpen ? 1: 0,
                    y: isOpen ? 20 : 10,
                    transition: {delay: index * 0.1, duration: 0.3}
                }}
                />
            ))}
        </div>
        </div>
    </div>
  )
}

export default Aside