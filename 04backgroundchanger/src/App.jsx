import { useState } from 'react'

function App() {
  const [color, setColor] = useState('olive')

  return (
    <div className='w-full h-screen duration-200'
      style={{ backgroundColor: color }}
    >
      <div className='fixed flex flex-wrap gap-4 p-4'>
        <button
          className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'
          onClick={() => setColor('blue')}
        >
          Blue
        </button>
        <button
          className='px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600'
          onClick={() => setColor('green')}
        >
          Green
        </button>
        <button
          className='px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600'
          onClick={() => setColor('red')}
        >
          Red
        </button>

        <button
          className='px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600'
          onClick={() => setColor("orange")}
        >
          Orange
        </button>

        <button
          className='px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600'
          onClick={() => setColor("purple")}
        >
          Purple
        </button>

      </div>
    </div>
  )
}

export default App
