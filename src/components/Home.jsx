import React, { useContext, useState } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import Aside from './Aside'
import Top from './Top'
import { Pencil } from 'lucide-react'

const Home = () => {
    const {theme} = useContext(ThemeContext);
    const [notes, setNotes] = useState([]);

    const addNote = (color) =>{
        const newNote = {
          id: Date.now(),
          date: Date.now(),
          color
        };
        setNotes([...notes, newNote])
    }

    const formatDate = (timestamp) => {
      const date = new Date(timestamp);
      const options = {month: "short", day: "numeric", yaer: "numeric"};
      return date.toLocaleTimeString('en-US', options)
    }
  return (
    <div
    className='m-20 rounded-3xl overflow-y-scroll overflow-x-hidden flex'
    style={{
        backgroundColor: theme.background,
        color: theme.text,
        height: "85vh"
      }}
    >
        <Aside addNote={addNote}/>
        <main>
            <Top/>
            <div className='px-20'>
                <p className='font-bold text-4xl'>Notes</p>

                {/* Notes Display */}
                <div className='mt-6 flex gap-10'>
                  {notes.map((note) => (
                    <div key={note.id} className='relative' >
                      <div style={{backgroundColor: note.color}} className='rounded-xl shadow-lg p-4'>
                     <div>
                     <section className='absolute bottom-3 left-3 flex gap-2 items-center'>
                     <div className='bg-black text-white p-1.5 rounded-full'>
                        <Pencil height={18} width={18}/>
                      </div>
                      <p className='text-gray-700 text-sm'>{formatDate(note.date)}</p>
                     </section>
                      <textarea key={note.id} className='h-42 w-52 p-2 focus:border-none focus:outline-none overflow-auto text-gray-800 focus:ring-0 ' placeholder='type your notes here...' style={{backgroundColor: note.color}}/>
                     </div>
                      </div>
                    </div>            
                  ))}
                </div>
            </div>
        </main>
    </div>
  )
}

export default Home