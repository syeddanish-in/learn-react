import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  let myObj = {
    username: 'Jolly',
    age: 30,
  }
  let myArr = [1, 2, 3]

  return (
    //fragment
    <>
      <h1 className='bg-green-500 text-black p-4 rounded-xl '>Tailwind Test</h1>
      <Card username='Jane Smith' btnText='Get Started' />
      <Card username='John Doe' btnText='Learn More' />
    </>
  )
}

export default App
